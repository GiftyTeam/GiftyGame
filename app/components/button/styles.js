import {StyleSheet} from 'react-native';
import {colors} from '../../modules/utils/colors';

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 60,
    borderRadius: 18,
    backgroundColor: colors.pickledBluewood,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'BalooChettan-Regular',
    fontStyle: 'normal',
  },
});
export default styles;
