import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../modules/utils/colors';

const Width = Dimensions.get('window').width;

export const descriptionStyle = StyleSheet.create({
  container: {
    height: 104,
    width: '90%',
    marginTop: 20,
  },
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  componentText: {
    fontSize: Width > 350 ? 36 : 32,
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
  },
});
