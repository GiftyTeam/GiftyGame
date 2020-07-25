import {colors} from '../../modules/utils/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
    width: '100%',
    height: 55,
  },
  buttonName: {
    fontFamily: 'BalooChettan-Regular',
    color: colors.white,
    fontStyle: 'normal',
    lineHeight: 46,
    fontSize: 30,
  },
});

export default styles;
