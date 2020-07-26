import {colors} from '../../modules/utils/colors';
import {StyleSheet} from 'react-native';

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
  logout:{
    position:'absolute',
    top:20,
    right:20,
  }
});
