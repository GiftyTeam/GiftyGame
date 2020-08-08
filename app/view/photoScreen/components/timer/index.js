import React from 'react';
import {View, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './style';
import {colors} from '../../../../modules/utils/colors';

const windowWidth = Dimensions.get('window').width;
const barWidth = windowWidth * 0.96; //2% paddinghorizontal for photoScreen

function Timer({remaining, total}) {
  //   const [total, setTotal] = useState(10);
  //   const [remaining, setRemaining] = useState(total);
  //   const [isFirstStart, setIsFirstStart] = useState(true);
  //   var timer = {};

  //   useEffect(() => {
  //     // if (isFirstStart) {
  //     //   startTimer();
  //     //   setIsFirstStart(false);
  //     // }
  //     timer = setInterval(() => {
  //       if (remaining > 0) setRemaining(remaining - 1);
  //       else {
  //         //do smth
  //       }
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   });

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
