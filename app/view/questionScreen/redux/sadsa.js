import React, {useState} from 'react';
import {ImageBackground, Text, View, ScrollView} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import QuestionTimer from './components/timer';
import DashedLine from './components/dashedLine';
import Header from './components/header';
import AnswerBox from './components/answerBox';

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
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  // TODO: Answer Selection must be done through redux state
  return (
    <ImageBackground style={{flex: 1}} source={imgPath.mainBackground}>
      <ScrollView style={styles.container}>
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
        <View style={styles.answersContainer}>
          <View style={{height: 52, width: '100%', backgroundColor: 'blue'}}>
            {/* <AnswerBox
              answer={questions[currentQuestion - 1].answers[0]}
              selectedAnswer={selectedAnswer}
              answerID={1}
              onPress={() => console.warn('answer 1')}
            /> */}
          </View>
          <View style={{height: 52, width: '100%', backgroundColor: 'red'}}>
            {/* <AnswerBox
              answer={questions[currentQuestion - 1].answers[1]}
              selectedAnswer={selectedAnswer}
              answerID={2}
              onPress={() => console.warn('answer 2')}
            /> */}
          </View>
          <View style={{height: 52, width: '100%', backgroundColor: 'green'}}>
            {/* <AnswerBox
              answer={questions[currentQuestion - 1].answers[2]}
              selectedAnswer={selectedAnswer}
              answerID={3}
              onPress={() => console.warn('answer 3')}
            /> */}
          </View>
          <View style={{height: 52, width: '100%', backgroundColor: 'yellow'}}>
            {/* <AnswerBox
              answer={questions[currentQuestion - 1].answers[3]}
              selectedAnswer={selectedAnswer}
              answerID={4}
              onPress={() => console.warn('answer 4')}
            /> */}
          </View>
          {/* <AnswerBox
            answer={questions[currentQuestion - 1].answers[0]}
            selectedAnswer={selectedAnswer}
            answerID={1}
            onPress={() => console.warn('answer 1')}
          />
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[1]}
            selectedAnswer={selectedAnswer}
            answerID={2}
            onPress={() => console.warn('answer 2')}
          />

          <AnswerBox
            answer={questions[currentQuestion - 1].answers[2]}
            selectedAnswer={selectedAnswer}
            answerID={3}
            onPress={() => console.warn('answer 3')}
          />
          <AnswerBox
            answer={questions[currentQuestion - 1].answers[3]}
            selectedAnswer={selectedAnswer}
            answerID={4}
            onPress={() => console.warn('answer 4')}
          /> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default QuestionScreen;
