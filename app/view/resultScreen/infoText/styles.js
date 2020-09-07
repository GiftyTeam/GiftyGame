import {StyleSheet} from 'react-native';
import {colors} from '../../../modules/utils/colors';

export const infoTextStyle = StyleSheet.create({
  infoTextView: {
    flexDirection: 'row',
    height: 52,
    width: 141,
    alignItems: 'center',
    justifyContent:'center'
  },
  infoText: {
    fontSize: 36,
    marginRight: 5,
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
  }
});
