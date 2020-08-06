import {colors} from '../../../../modules/utils/colors';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 46,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: colors.deepSeaGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 32,
    color: 'white',
  },
});
export default styles;
