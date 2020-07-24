import { colors } from '../../modules/utils/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonName: {
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
    fontStyle: 'normal',
    fontSize: 30,
    lineHeight: 46,
  },
});

export default styles;
