import { StyleSheet } from 'react-native';
import { colors } from '../../modules/utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 156,
    height: 129,
    alignSelf:'center'

  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    paddingHorizontal: 27,
    alignItems: 'center',
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
    fontFamily: 'BalooCh+ettan-Regular',
    color: colors.white,
    fontSize: 30,
  },
});

export default styles;
