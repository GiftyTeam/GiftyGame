import {StyleSheet} from 'react-native';
import {colors} from '../../../modules/utils/colors';
export const scoreBoardStyles = StyleSheet.create({
  scoreView: {
    flex: 5,
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
    height: 211,
  },
  scoreBoardHeaderAndBottom: {
    flexDirection: 'row',
  },
  scoreBoardHeaderComponent: {
    width: '49.8%',
    alignItems: 'center',
    height: 43,
    backgroundColor: colors.mosque,
  },
  scoreBoardHeaderText: {
    fontSize: 30,
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
  },
  Line: {
    width: '0.4%',
    backgroundColor: colors.gray77,
  },
  flatContainer: {
    flexDirection: 'row',
    height: 25,
    backgroundColor: colors.gray81,
    opacity: 0.35,
  },
  flatComponent: {
    width: '49.8%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
  },
  flatText: {
    fontSize: 24,
    color: colors.black,
    fontFamily: 'BalooChettan-Regular',
    opacity: 1,
  },
  botomContainer: {
    width: '50%',
    alignItems: 'center',
    height: 43,
    backgroundColor: colors.mosque,
  },
  bottomText: {
    fontSize: 30,
    color: colors.white,
    fontFamily: 'BalooChettan-Regular',
  },
});
