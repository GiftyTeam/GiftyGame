import React, {useState, useRef} from 'react';
import {ImageBackground, Text, View, ScrollView, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {imgPath} from '../../modules/utils/images';
import QuestionTimer from './components/timer';
import Header from './components/header';
import AnswerBox from './components/answerBox';
import appLocalization from '../../localization/localization';
import {setSelectedAnswerID} from './redux/answerAction';
import styles from './styles';
import { colors } from '../../modules/utils/colors';

const QuestionScreen = () => {
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
    }
  ]);
  const [totalQuestions, setTotalQuestions] = useState(questions.length);
  const [showResult, setShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // ref
  const scrollView = useRef();

  function nextQuestion() {
    if (currentQuestion !== totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setDisabled(false);
    } else {
      // go to result screen
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
      scrollView.current.scrollToEnd({animated: true});
    }, 250);
    setTimeout(() => {
      setShowResult(false);
      setIsAnswerCorrect(false);
      dispatch(setSelectedAnswerID(''));
      nextQuestion();
    }, 1500);
  }

  // TODO: Answer Selection must be done through redux state
  return (
    <ImageBackground style={styles.container} source={imgPath.mainBackground}>
      <StatusBar backgroundColor={colors.bostonBlue} />
      <ScrollView
        ref={scrollView}
        contentContainerStyle={styles.innerContainer}>
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
          <Text style={styles.questionStyle}>
            {questions[currentQuestion - 1].question}
          </Text>
        </View>
        <View>
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[0]}
            answerID={1}
            disabled={disabled}
            onPress={() => selectAnswer(1)}
          />
        </View>
        <View style={styles.answerBoxContainer}>
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[1]}
            answerID={2}
            disabled={disabled}
            onPress={() => selectAnswer(2)}
          />
        </View>
        <View style={styles.answerBoxContainer}>
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[2]}
            answerID={3}
            disabled={disabled}
            onPress={() => selectAnswer(3)}
          />
        </View>
        <View style={styles.answerBoxContainer}>
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[3]}
            answerID={4}
            disabled={disabled}
            onPress={() => selectAnswer(4)}
          />
        </View>
        {showResult &&
          (isAnswerCorrect ? (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                {appLocalization.correctResult}
              </Text>
            </View>
          ) : (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                {appLocalization.wrongResult}
              </Text>
            </View>
          ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default QuestionScreen;
