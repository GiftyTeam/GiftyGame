import {StyleSheet} from 'react-native';
import {colors} from '../../modules/utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createProfileSection: {
    flex: 0.7,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  topContainer: {
    flex: 0.3,
    width:'100%',
  },
  avatarContainer: {
    width: 138,
    height: 138,
    borderRadius: 138 / 2,
    borderWidth: 7,
    borderColor: colors.deepSeaGreen,
    position: 'absolute',
    left: 138,
    top: -69,
    zIndex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPhoto: {
    width: 51,
    height: 49,
  },
  picker: {
    backgroundColor: colors.mosque,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    borderWidth: 5,
    borderColor: colors.fountainBlue,
    paddingHorizontal: 25,
  },
  selectedLabel: {
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 46,
  },
  pickerPlaceholder: {
    color: colors.silver,
    fontFamily: 'BalooChettan-Regular',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 46,
  },
  inputText: {
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 46,
  },
  input: {
    height: 55,
    width: '100%',
    paddingHorizontal: 30,
  },
  logout:{
    position:'absolute',
    top:20,
    right:20,
  }
});
