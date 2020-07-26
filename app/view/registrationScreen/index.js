import React from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  Button,
  Image,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import Input from '../../components/textInput';
import ButtonComponent from '../../components/button';
import {colors} from '../../modules/utils/colors';

const RegistrationScreen = ({navigation}) => {
  return (
    <ImageBackground source={imgPath.mainBackground} style={styles.container}>
      <StatusBar backgroundColor={colors.wedgewood} />
      <Image source={imgPath.logo} style={styles.logo} />
      <Input placeholder="+994 (xx) xxx - xx - xx" isPhoneNumber={true} />
      <ButtonComponent name={appLocalization.nextButton} />
    </ImageBackground>
  );
};
export default RegistrationScreen;
