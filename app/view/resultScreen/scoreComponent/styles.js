import {StyleSheet} from 'react-native';
import {colors} from '../../../modules/utils/colors';

export const scoreStyle = StyleSheet.create({
  scoreComponent: {
    flexDirection: 'row',
    height: 52,
    width: 141,
    alignItems: 'center',
    marginTop: 29,
    justifyContent: 'space-between',
  },
  scoreText: {
    fontSize: 36,
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
    lineHeight: 52,
  },
});
