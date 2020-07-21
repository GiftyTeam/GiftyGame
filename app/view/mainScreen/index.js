import React from 'react';
import {ImageBackground, Button} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import styles from './styles';

const MainScreen = (props) => {
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
