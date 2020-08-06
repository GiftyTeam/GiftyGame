import React from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import styles from './styles';

const MainScreen = ({navigation}) => {
  return (
    <ImageBackground source={imgPath.mainBackground} style={styles.container}>
      <Button
        onPress={() => props.navigation.navigate('QuestionScreen')}
        title="Question Screen"
      />
      <Button
        onPress={() => props.navigation.navigate('PhotoScreen')}
        title="Photo Screen"
      />
    </ImageBackground>
  );
};

export default MainScreen;
