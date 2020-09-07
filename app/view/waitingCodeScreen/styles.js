import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    justifyContent: 'flex-end',
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    height: '50%',
  },
  codeWrapper: {
    flex: 1,
  },
  logo: {
    width: 156,
    height: 129,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});

export default styles;
