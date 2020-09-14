import React, {useEffect, useState} from 'react';
import {ImageBackground, View, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {imgPath} from '../../modules/utils/images';
import QuestionTimer from './components/timer';
import Header from './components/header';
import AnswerBox from './components/answerBox';
import appLocalization from '../../localization/localization';
import {setSelectedAnswerID, setResult} from './redux/answerAction';
import styles from './styles';
import AppText from '../../components/appText';
import {colors} from '../../modules/utils/colors';
import {constants} from '../../modules/utils/constants';
import Question from '../../modules/classes/question';
import PhotoModal from './components/photoModal';

const TIMER_DEFAULT = 10;
const PHOTO_TIMER = 3;

const QuestionScreen = ({navigation}) => {
  let photoTimer;
  //hooks
  const dispatch = useDispatch();

  // state
  let [remainingTime, setRemainingTime] = useState(TIMER_DEFAULT);
  let [questionStartedAt, setQuestionStartedAt] = useState(new Date());
  let [questions, setQuestions] = useState([]);
  let [currentQuestion, setCurrentQuestion] = useState(1);
  let [timerInterval, setTimerInterval] = useState();
  let [photoRemaining, setPhotoRemainingTime] = useState(0);
  let [totalPoints, setTotalPoints] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);
  let [correctAnswers, setCorrectAnswers] = useState(0);
  let [wrongAnswers, setWrongAnswers] = useState(0);

  useEffect(() => {
    getQuestions().then(() => {
      openPhoto();
    });
    return () => {
      stopTimer();
    };
  }, []);

  function closePhoto() {
    setPhotoVisible(false);
    startTimer();
    endPhotoTimer();
  }

  function openPhoto() {
    setPhotoVisible(true);
  }

  function startPhotoTimer() {
    let photoRemaining = PHOTO_TIMER;
    setPhotoRemainingTime(photoRemaining);
    photoTimer = setInterval(() => {
      if (photoRemaining > 0) {
        photoRemaining = photoRemaining - 0.1;
        setPhotoRemainingTime(photoRemaining);
      } else {
        closePhoto();
      }
    }, 100);
  }

  function endPhotoTimer() {
    setPhotoRemainingTime(PHOTO_TIMER);
    if (photoTimer) clearInterval(photoTimer);
    // closePhoto();
  }

  async function getQuestions() {
    // get questions from db
    const questions_url = `${constants.API_URL}/getQuestions`;
    // const phoneNumber = useSelector(state => state.currentUserReducer.phoneNumber)
    let questionsPromise = fetch(questions_url, {
      method: 'GET',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({phoneNumber}), // TODO
    });
    try {
      const response = await questionsPromise;
      const res = await response.json();
      // console.log('questions in response ', res);
      let questions = res.map((q) => new Question(q));
      // console.log('mapped questions ', questions);
      setQuestions(questions);
    } catch (err) {
      console.log('err while getting questions ', err);
    }
  }

  function startTimer() {
    remainingTime = TIMER_DEFAULT;
    setRemainingTime(remainingTime);
    questionStartedAt = new Date();
    setQuestionStartedAt(questionStartedAt);
    timerInterval = setInterval(() => {
      remainingTime -= 1;
      setRemainingTime(remainingTime);
      if (remainingTime === 0) {
        selectAnswer(-1);
      }
    }, 1000);
    setTimerInterval(timerInterval);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = undefined;
      setTimerInterval(timerInterval);
    }
  }

  function nextQuestion() {
    if (currentQuestion !== questions.length) {
      // startTimer();
      openPhoto();
      currentQuestion += 1;
      setCurrentQuestion(currentQuestion);
      setDisabled(false);
    } else {
      // go to result screen
      let result = {
        totalPoints,
        correctAnswers,
        wrongAnswers,
      };
      dispatch(setResult(result));
      navigation.navigate('Result');
    }
  }

  function selectAnswer(answerIndex) {
    stopTimer();
    if (answerIndex !== -1) {
      let correctAnswerIndex = questions[currentQuestion - 1].answerIndex;
      setDisabled(true);
      setShowResult(true);
      setIsAnswerCorrect(answerIndex === correctAnswerIndex);
      if (answerIndex === correctAnswerIndex) {
        correctAnswers += 1;
        setCorrectAnswers(correctAnswers);
      } else {
        wrongAnswers += 1;
        setWrongAnswers(wrongAnswers);
      }
      if (answerIndex === correctAnswerIndex) {
        let now = new Date();
        let diff = now - questionStartedAt.getTime();
        let points = Math.floor((10000 - diff) / 10);
        if (diff >= 7000) points = 300;
        totalPoints += points;
        setTotalPoints(totalPoints);
      }
      dispatch(setSelectedAnswerID(answerIndex));
      setTimeout(() => {
        setShowResult(false);
        setIsAnswerCorrect(false);
        dispatch(setSelectedAnswerID(''));
        nextQuestion();
      }, 1500);
    } else {
      setDisabled(true);
      setShowResult(true);
      setIsAnswerCorrect(false);
      wrongAnswers += 1;
      setWrongAnswers(wrongAnswers);
      setTimeout(() => {
        setShowResult(false);
        setIsAnswerCorrect(false);
        dispatch(setSelectedAnswerID(''));
        nextQuestion();
      }, 1500);
    }
  }

  return (
    <ImageBackground style={styles.container} source={imgPath.mainBackground}>
      {questions.length > 0 && (
        <View style={styles.innerContainer}>
          <StatusBar backgroundColor={colors.bostonBlue} />
          <View style={styles.timerContainer}>
            <QuestionTimer remainingTime={remainingTime} />
          </View>
          <View style={styles.headerContainer}>
            <Header
              totalQuestions={questions.length}
              currentQuestion={currentQuestion}
              totalPoints={totalPoints}
            />
          </View>
          <View style={styles.questionContainer}>
            <AppText style={styles.questionStyle}>
              {questions[currentQuestion - 1].question}
            </AppText>
          </View>
          <View style={styles.answersContainer}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <AnswerBox
                answer={questions[currentQuestion - 1].answerA}
                answerID={1}
                disabled={disabled}
                onPress={() => selectAnswer(1)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <AnswerBox
                answer={questions[currentQuestion - 1].answerB}
                answerID={2}
                disabled={disabled}
                onPress={() => selectAnswer(2)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <AnswerBox
                answer={questions[currentQuestion - 1].answerC}
                answerID={3}
                disabled={disabled}
                onPress={() => selectAnswer(3)}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <AnswerBox
                answer={questions[currentQuestion - 1].answerD}
                answerID={4}
                disabled={disabled}
                onPress={() => selectAnswer(4)}
              />
            </View>
            <PhotoModal
              interval={PHOTO_TIMER}
              remaining={photoRemaining}
              photoURL={questions[currentQuestion - 1].photoURL}
              visible={photoVisible}
              onDismiss={closePhoto}
              onStartTimer={startPhotoTimer}
            />
          </View>
          <View style={styles.resultContainer}>
            {showResult &&
              (isAnswerCorrect ? (
                <AppText style={styles.resultText}>
                  {appLocalization.correctResult}
                </AppText>
              ) : (
                <AppText style={styles.resultText}>
                  {appLocalization.wrongResult}
                </AppText>
              ))}
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

export default QuestionScreen;
