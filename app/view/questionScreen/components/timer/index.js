import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {colors} from '../../../../modules/utils/colors';

const QuestionTimer = ({remainingTime}) => {
  return (
    <LinearGradient
      colors={[colors.sherpaBlue, colors.bostonBlue]}
      style={styles.container}
      useAngle={true}
      angle={30}>
      <Text style={styles.textStyle}>{remainingTime + 's'}</Text>
    </LinearGradient>
  );
};
export default QuestionTimer;
