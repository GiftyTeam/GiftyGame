import React, {useState} from 'react';
import {ImageBackground, Image, StatusBar, Text} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import Input from '../../components/textInput';
import Button from '../../components/button';
import {colors} from '../../modules/utils/colors';
import CodeFieldComponent from './components/CodeField';

const WaitingCodeScreen = ({navigation}) => {
  //   const disabled = inputValue.length === 19 ? false : true;

  return (
    <ImageBackground source={imgPath.mainBackground} style={styles.container}>
      <StatusBar backgroundColor={colors.wedgewood} />
      <Image source={imgPath.logo} style={styles.logo} />
      <CodeFieldComponent />
      <Button name={appLocalization.nextButton} isDisabled={false} />
      <Text>Kod gəlmədi?</Text>
    </ImageBackground>
  );
};
export default WaitingCodeScreen;
