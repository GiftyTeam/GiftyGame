import {colors} from '../../modules/utils/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderColor: colors.fountainBlue,
    backgroundColor: colors.mosque,
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 5,
    width: '100%',
    height: 55,
  },
  inputText: {
    fontFamily: 'BalooChettan-Regular',
    color: colors.white,
    fontStyle: 'normal',
    lineHeight: 46,
    fontSize: 25,
  },
});
