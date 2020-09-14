import React from 'react';
import {View, Dimensions} from 'react-native';
import { colors } from '../../../../../../modules/utils/colors';
import * as Progress from 'react-native-progress';
import styles from './style';

const windowWidth = Dimensions.get('window').width;
const barWidth = windowWidth * 0.96; //2% paddinghorizontal for photoScreen

function Timer({remaining, total}) {
  return (
    <View style={styles.container}>
      <Progress.Bar
        width={barWidth}
        color={colors.nobel}
        unfilledColor={'white'}
        borderRadius={0}
        borderColor={colors.nobel}
        progress={1 - remaining / total}
      />
    </View>
  );
}

export default Timer;
