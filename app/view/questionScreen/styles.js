import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 40,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingBottom: 10,
  },
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  questionContainer: {
    marginTop: 10,
    flex: 5,
  },
  answersContainer: {
    flex: 5,
    flexDirection: 'column',
  },
  answerBoxContainer: {
    marginTop: 18,
  },
  questionStyle: {
    color: 'white',
    fontSize: 36,
  },
  resultContainer: {
    flex: 1,
    marginTop: 31,
    alignSelf: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 36,
  },
});
export default styles;
