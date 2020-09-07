import React, {useState, useEffect} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import styles from './style';
import {colors} from '../../modules/utils/colors';
import Timer from './components/timer';

function PhotoScreen({navigation}) {
  const [image, setImage] = useState({
    src: 'https://az.all.biz/img/az/catalog/11077.png',
    timer: 10,
  });

  const [total, setTotal] = useState(image.timer);
  const [remaining, setRemaining] = useState(total);
  const [canStartTimer, setCanStartTimer] = useState(false);

  let timer = {};
  function startTimer() {
    setCanStartTimer(true);
  }

  useEffect(() => {
    if (canStartTimer) {
      timer = setInterval(() => {
        if (remaining > 0) setRemaining(remaining - 0.1);
        else {
          navigation.navigate('Question')
          //do smth
          clearInterval(timer);
        }
      }, 100);
    }
    return () => {
      timer ? clearInterval(timer) : null;
    };
  });

  return (
    <ImageBackground
      style={styles.container}
      source={{uri: image.src}}
      onLoadEnd={() => startTimer()}>
      <StatusBar backgroundColor={colors.bostonBlue} />
      <View style={styles.timerContainer}>
        <Timer remaining={remaining} total={total} />
      </View>
    </ImageBackground>
  );
}

export default PhotoScreen;
