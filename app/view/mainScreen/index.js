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
      <Text style={{fontFamily: 'BalooChettan2-Medium',fontSize:50}}>{appLocalization.nextButton}</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="go to Profile"
      />
    </ImageBackground>
  );
};

export default MainScreen;
