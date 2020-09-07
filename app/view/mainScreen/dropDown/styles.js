import {StyleSheet} from 'react-native';
import {colors} from '../../../modules/utils/colors';
export const modalStyle = StyleSheet.create({
  container: {
    paddingTop: 45,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  buttonStyle1: {
    height: 28,
    width: 144,
    justifyContent: 'center',
    backgroundColor: colors.mosque,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  buttonStyle2: {
    height: 28,
    width: 144,
    justifyContent: 'center',
    backgroundColor: colors.mosque,
  },
  buttonStyle3: {
    height: 28,
    width: 144,
    justifyContent: 'center',
    backgroundColor: colors.mosque,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 5,
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
  },
  rectangleContainer: {
    alignItems: 'center',
    width: 144,
    backgroundColor: colors.mosque,
  },
  rectangle: {
    height: 1,
    width: 134,
    backgroundColor: colors.gray77,
  },
});
