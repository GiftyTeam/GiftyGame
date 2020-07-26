import {StyleSheet} from 'react-native';
import {colors} from '../../modules/utils/colors';

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 60,
    borderRadius: 18,
    backgroundColor: colors.pickledBluewood,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'BalooChettan-Regular',
    fontStyle: 'normal',
  },
});
export default styles;
