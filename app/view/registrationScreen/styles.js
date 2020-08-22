import {StyleSheet} from 'react-native';
import {colors} from '../../modules/utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
  },

  logo: {
    width: 156,
    height: 129,
    alignSelf: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  inputContainer: {
    paddingHorizontal: 27,
    height: '50%',
  },
  input: {
    height: 60,
    backgroundColor: colors.mosque,
    borderRadius: 18,
    borderWidth: 5,
    paddingHorizontal: 15,
    paddingVertical: 2,
    alignSelf: 'stretch',
    borderColor: colors.fountainBlue,
    fontFamily: 'BalooChettan-Regular',
    color: colors.white,
    fontSize: 32,
    marginBottom: 15,
    alignItems: 'stretch',
  },
});

export default styles;
