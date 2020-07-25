import React from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import styles from './styles';

const MainScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={imgPath.mainBackground}
      style={{width: '100%', height: '100%'}}>
      <Text>{appLocalization.nextButton}</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="go to Profile"
      />
    </ImageBackground>
  );
};

export default MainScreen;
