import {StyleSheet} from 'react-native';
import {colors} from '../../modules/utils/colors';

export const buttonStyle = {
  container: {
    backgroundColor: colors.robinsBlue,
    width: '85%',
    height: 60,
    borderRadius: 18,
  },
  buttonView: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const logoStyle = StyleSheet.create({
  logoView: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    height: 100,
    width: 130,
  },
});
