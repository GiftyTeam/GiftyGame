import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 60,
    paddingHorizontal: '5%',
  },
  innerContainer: {
    flexGrow: 1,
  },
  timerContainer: {},
  headerContainer: {
    marginTop: 10,
  },
  questionContainer: {
    marginTop: 10,
  },
  answersContainer: {
    padding: 10,
    marginTop: 130,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  answerBoxContainer: {
    marginTop: 18,
  },
  questionStyle: {
    color: 'white',
    fontSize: 36,
  },
  resultContainer: {
    marginTop: 31,
    alignSelf: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 36,
  },
});
export default styles;
