import {StyleSheet} from 'react-native';
import {colors} from '../../modules/utils/colors'
export const resultScreenStyles = StyleSheet.create({
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
});

export const buttonStyle = {
  container: {
    backgroundColor: colors.robinsBlue,
    width: '85%',
    height: 60,
    borderRadius: 18,
    marginTop: '15%',
  },
};

export const logoStyle = StyleSheet.create({
  logoView: {
    alignItems: 'center',
    marginTop: 158,
  },
  logo: {
    height: 100,
    width: 130,
  },
});
