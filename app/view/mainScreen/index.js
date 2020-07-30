import React from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import styles from './styles';

const MainScreen = ({navigation}) => {
  return (
    <ImageBackground source={imgPath.mainBackground} style={{flex: 1}}>
      <Text>{appLocalization.nextButton}</Text>
      <Button
        onPress={() => navigation.navigate('QuestionScreen')}
        title="go to question screen"
      />
    </ImageBackground>
  );
};

export default MainScreen;