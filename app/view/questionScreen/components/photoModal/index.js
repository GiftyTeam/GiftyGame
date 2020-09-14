import React, {useState} from 'react';
import {ImageBackground, StatusBar, Modal, View} from 'react-native';
import {colors} from '../../../../modules/utils/colors';
import Timer from './components/timer';
import styles from './style';

function PhotoModal({
  photoURL,
  interval,
  onStartTimer,
  remaining,
  onDismiss,
  visible,
}) {
  //   console.log('photo url ', photoURL);
  //   let [remaining, setRemaining] = useState(interval);

  let timer = {};
  function startTimer() {
    console.log('photo ', photoURL);
    show();
  }

  function show() {
    // if (canStartTimer) {
    timer = setInterval(() => {
      if (remaining > 0) {
        console.log('remaining ', remaining);
        let remaining = remaining - 0.1;
        setRemaining(remaining);
      } else {
        //   navigation.navigate('Question');
        //do smth
        onClose();
        //   clearInterval(timer);
      }
    }, 100);
    // }
  }

  function onClose() {
    if (timer) clearInterval(timer);
    onDismiss();
  }

  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent={false}
      onDismiss={onClose}
      onRequestClose={onClose}
      visible={visible}
      //   onShow={onShow}
    >
      <ImageBackground
        style={styles.container}
        source={{uri: photoURL}}
        onLoadEnd={() => onStartTimer()}>
        <StatusBar backgroundColor={colors.bostonBlue} />
        <View style={styles.timerContainer}>
          <Timer remaining={remaining} total={interval} />
        </View>
      </ImageBackground>
    </Modal>
  );
}

export default PhotoModal;
