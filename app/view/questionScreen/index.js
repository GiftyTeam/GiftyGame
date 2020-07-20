import React, {useState, useRef} from 'react';
import {ImageBackground, Text, View, ScrollView} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import QuestionTimer from './components/timer';
import DashedLine from './components/dashedLine';
import Header from './components/header';
import AnswerBox from './components/answerBox';
import appLocalization from '../../localization/localization';

const QuestionScreen = () => {
  const [timerInterval, setTimerInterval] = useState(10);
  const [remainingTime, setRemainingTime] = useState(timerInterval);
  const [totalQuestions, setTotalQuestions] = useState(12);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question:
        '"Danone" şirkəti harda istehsal olunur?Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc risus, egestas eu commodo vitae, iaculis at purus. Suspendisse auctor nulla at ornare ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      answers: ['Fransa', 'Ingiltərə', 'Rusiya', 'Almaniya'],
      correctAnswer: 'Fransa',
    },
  ]);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [showResult, setShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const scrollView = useRef();
  // TODO: Answer Selection must be done through redux state
  return (
    <ImageBackground style={styles.container} source={imgPath.mainBackground}>
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
            selectedAnswer={selectedAnswer}
            answerID={1}
            onPress={() => {
              setShowResult(true);
              setIsAnswerCorrect(true);
              setTimeout(() => {
                scrollView.current.scrollToEnd({animated: true});
              }, 250);
              setTimeout(() => {
                setShowResult(false);
                setIsAnswerCorrect(false);
              }, 1500);
            }}
          />
        </View>
        <View style={styles.answerBoxContainer}>
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[1]}
            selectedAnswer={selectedAnswer}
            answerID={2}
            onPress={() => {
              setShowResult(true);
              setIsAnswerCorrect(false);
              setTimeout(() => {
                scrollView.current.scrollToEnd({animated: true});
              }, 250);
              setTimeout(() => {
                setShowResult(false);
                setIsAnswerCorrect(false);
              }, 1500);
            }}
          />
        </View>
        <View style={styles.answerBoxContainer}>
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[2]}
            selectedAnswer={selectedAnswer}
            answerID={3}
            onPress={() => {
              setShowResult(true);
              setIsAnswerCorrect(false);
              setTimeout(() => {
                scrollView.current.scrollToEnd({animated: true});
              }, 250);
              setTimeout(() => {
                setShowResult(false);
                setIsAnswerCorrect(false);
              }, 1500);
            }}
          />
        </View>
        <View style={styles.answerBoxContainer}>
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[3]}
            selectedAnswer={selectedAnswer}
            answerID={4}
            onPress={() => {
              setShowResult(true);
              setIsAnswerCorrect(false);
              setTimeout(()=>{
                scrollView.current.scrollToEnd({animated: true})
              }, 250)
              setTimeout(() => {
                setShowResult(false);
                setIsAnswerCorrect(false);
              }, 1500);
            }}
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
