import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../modules/utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 54,
  },
  cell: {
    width: 40,
    height: 62,
    fontSize: 38,
    lineHeight: 62,
    borderWidth: 5,
    borderRadius: 5,
    color: 'white',
    backgroundColor: colors.mosque,
    borderColor: colors.fountainBlue,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
