import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {colors} from '../../../../modules/utils/colors';
import AppText from '../../../../components/appText';

const QuestionTimer = ({remainingTime}) => {
  return (
    <LinearGradient
      colors={[colors.sherpaBlue, colors.bostonBlue]}
      style={styles.container}
      useAngle={true}
      angle={30}>
      <AppText style={styles.textStyle}>{remainingTime + 's'}</AppText>
    </LinearGradient>
  );
};
export default QuestionTimer;
