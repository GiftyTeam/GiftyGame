import {colors} from '../../../../modules/utils/colors';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.fountainBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: colors.azureRadiance,
    borderWidth: 2,
    borderColor: colors.fountainBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
