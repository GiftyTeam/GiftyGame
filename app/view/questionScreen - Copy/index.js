import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import QuestionTimer from './components/timer';
import DashedLine from './components/dashedLine';
import Header from './components/header';

const QuestionScreen = () => {
  const [timerInterval, setTimerInterval] = useState(10);
  const [remainingTime, setRemainingTime] = useState(timerInterval);
  const [totalQuestions, setTotalQuestions] = useState(12);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: '"Danone" şirkəti harda istehsal olunur?',
      answers: ['Fransa', 'Ingiltərə', 'Rusiya', 'Almaniya'],
      correctAnswer: 'Fransa',
    },
  ]);
  return (
    <ImageBackground style={styles.container} source={imgPath.mainBackground}>
      <QuestionTimer remainingTime={remainingTime} />
      <View style={styles.marginTop}>
        <Header
          totalQuestions={totalQuestions}
          currentQuestion={currentQuestion}
          totalPoints={totalPoints}
        />
        <View style={styles.marginTop}>
          <Text style={styles.questionStyle}>{questions[currentQuestion - 1].question}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default QuestionScreen;
