import {colors} from '../../../../modules/utils/colors';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    borderWidth: 5,
    borderColor: colors.fountainBlue,
    backgroundColor: colors.sherpaBlue,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2.5%',
  },
  answerText:{
    color: 'white',
    fontSize: 32
  }
});
export default styles;
