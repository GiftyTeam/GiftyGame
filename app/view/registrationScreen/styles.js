import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../modules/utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 156,
    height: 129,
    alignSelf: 'center',
    marginBottom: 90,
    marginTop: 130,
  },
  input: {
    height: 60,
    backgroundColor: colors.mosque,
    borderRadius: 18,
    borderWidth: 5,
    paddingHorizontal: 15,
    borderColor: colors.fountainBlue,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'BalooChettan-Regular',
    color: colors.white,
    fontSize: 32,
    height: 60,
  },

  inputText: {},
});

export default styles;
