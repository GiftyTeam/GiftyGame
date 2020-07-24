import {StyleSheet} from 'react-native';
import { colors } from '../../modules/utils/colors';

export const styles = StyleSheet.create({
  input: {
    height: 55,
    width: '100%',
    backgroundColor: colors.mosque,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    borderWidth: 5,
    borderColor: colors.fountainBlue,
    paddingHorizontal: 30,
  },
  inputText: {
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 46,
  },
});
