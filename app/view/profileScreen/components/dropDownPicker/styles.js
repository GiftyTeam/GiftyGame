import {colors} from '../../../../modules/utils/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  picker: {
    borderColor: colors.fountainBlue,
    backgroundColor: colors.mosque,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderTopRightRadius: 18,
    justifyContent: 'center',
    borderTopLeftRadius: 18,
    alignItems: 'center',
    borderWidth: 5,
    marginBottom: 10,
  },
  selectedLabel: {
    fontFamily: 'BalooChettan-Regular',
    color: colors.white,
    fontStyle: 'normal',
    lineHeight: 46,
    fontSize: 32,
  },
  pickerPlaceholder: {
    fontFamily: 'BalooChettan-Regular',
    color: colors.silver,
    fontStyle: 'normal',
    lineHeight: 46,
    fontSize: 32,
  },
});
