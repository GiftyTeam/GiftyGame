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
    paddingHorizontal: 25,
    alignItems: 'center',
    borderWidth: 5,
  },
  selectedLabel: {
    fontFamily: 'BalooChettan-Regular',
    color: colors.white,
    fontStyle: 'normal',
    lineHeight: 46,
    fontSize: 25,
  },
  pickerPlaceholder: {
    fontFamily: 'BalooChettan-Regular',
    color: colors.silver,
    fontStyle: 'normal',
    lineHeight: 46,
    fontSize: 25,
  },
});
