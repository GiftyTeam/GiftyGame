import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../modules/utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 54,
    marginBottom: 15,
  },
  cell: {
    width: 40,
    height: 62,
    paddingVertical: 1,
    fontSize: 33,
    lineHeight: 60,
    borderWidth: 5,
    borderRadius: 5,
    color: 'white',
    backgroundColor: colors.mosque,
    borderColor: colors.fountainBlue,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
