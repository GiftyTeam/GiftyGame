import React, {useState} from 'react';
import {ImageBackground, View, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {imgPath} from '../../modules/utils/images';
import QuestionTimer from './components/timer';
import Header from './components/header';
import AnswerBox from './components/answerBox';
import appLocalization from '../../localization/localization';
import {setSelectedAnswerID} from './redux/answerAction';
import styles from './styles';
import {colors} from '../../modules/utils/colors';
import AppText from '../../components/appText';

const QuestionScreen = ({navigation}) => {
  //hooks
  const dispatch = useDispatch();

  // state
  const [timerInterval, setTimerInterval] = useState(10);
  const [remainingTime, setRemainingTime] = useState(timerInterval);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: '"Danone" şirkəti harda istehsal olunur?',
      answers: ['Fransa', 'Ingiltərə', 'Rusiya', 'Almaniya'],
      correctAnswer: 'Fransa',
    },
    {
      question: 'This is second question',
      answers: ['A', 'B', 'C', 'D'],
      correctAnswer: 'B',
    },
  ]);
  const [totalQuestions, setTotalQuestions] = useState(questions.length);
  const [showResult, setShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function nextQuestion() {
    if (currentQuestion !== totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setDisabled(false);
    } else {
      // go to result screen
      navigation.navigate('Result')
    }
  }

  function selectAnswer(answerID) {
    setDisabled(true);
    let correctAnswerID =
      questions[currentQuestion - 1].answers.indexOf(
        questions[currentQuestion - 1].correctAnswer,
      ) + 1;
    setShowResult(true);
    setIsAnswerCorrect(answerID === correctAnswerID);
    if (answerID === correctAnswerID) setTotalPoints(totalPoints + 500);
    dispatch(setSelectedAnswerID(answerID));
    setTimeout(() => {
      setShowResult(false);
      setIsAnswerCorrect(false);
      dispatch(setSelectedAnswerID(''));
      nextQuestion();
    }, 1500);
  }

  return (
    <ImageBackground style={styles.container} source={imgPath.mainBackground}>
      <View style={styles.innerContainer}>
        <StatusBar backgroundColor={colors.bostonBlue} />
        <View style={styles.timerContainer}>
          <QuestionTimer remainingTime={remainingTime} />
        </View>
        <View style={styles.headerContainer}>
          <Header
            totalQuestions={totalQuestions}
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
              answer={questions[currentQuestion - 1].answers[0]}
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
              answer={questions[currentQuestion - 1].answers[1]}
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
              answer={questions[currentQuestion - 1].answers[2]}
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
              answer={questions[currentQuestion - 1].answers[3]}
              answerID={4}
              disabled={disabled}
              onPress={() => selectAnswer(4)}
            />
          </View>
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
    </ImageBackground>
  );
};

export default QuestionScreen;
