import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { imgPath } from '../../modules/utils/images';
import appLocalization from '../../localization/localization';

const MainScreen = () => {
  return (
    <ImageBackground source={imgPath.mainBackground} style={{width: '100%', height: '100%'}}>
      <Text>{appLocalization.nextButton}</Text>
    </ImageBackground>
  );
};

export default MainScreen;
