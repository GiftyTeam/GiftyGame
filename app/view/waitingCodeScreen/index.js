import React from 'react';
import {
  ImageBackground,
  Image,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import Button from '../../components/button';
import {colors} from '../../modules/utils/colors';
import CodeFieldComponent from './components/CodeField';
import Timer from './components/Timer';

const WaitingCodeScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <ImageBackground source={imgPath.mainBackground} style={styles.container}>
        <StatusBar backgroundColor={colors.wedgewood} />
        <Image source={imgPath.logo} style={styles.logo} />
        <CodeFieldComponent />
        <Button name={appLocalization.nextButton} isDisabled={false} />
        <Timer />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
export default WaitingCodeScreen;
