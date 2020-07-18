import React from 'react';
import {SafeAreaView, Text, ImageBackground, Button} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';

const RegistrationScreen = (props) => {
  return (
      <ImageBackground source={imgPath.mainBackground} style={styles.container}>
        <Text>Registration Sceen</Text>
        <Button onPress={() =>props.navigation.navigate('MainStack')} title="go to main"/>
      </ImageBackground>
  );
};
export default RegistrationScreen;
