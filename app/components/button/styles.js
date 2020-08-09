import {StyleSheet} from 'react-native';
import {colors} from '../../modules/utils/colors';

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 18,
    backgroundColor: colors.pickledBluewood,
    marginTop: 5,
    alignItems: 'center',
    alignSelf: 'stretch',
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
