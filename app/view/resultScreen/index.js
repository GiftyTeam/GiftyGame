import React from 'react';
import {View, ImageBackground, StatusBar} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import ScoreComponent from './scoreComponent';
import Description from './descriptionComponent';
import InfoText from './infoTextComponent';
import {resultScreenStyles} from './styles';
import Button from '../../components/button/index';
import appLocalization from '../../localization/localization';
import {buttonStyle} from './styles';

const ResultScreen = () => {
  return (
    <ImageBackground
      source={imgPath.mainBackground}
      style={resultScreenStyles.backgroundImageStyle}>
      <StatusBar backgroundColor="#41879A" />
      <View style={resultScreenStyles.container}>
        <ScoreComponent />
        <Description />
        <InfoText />
        <Button
          buttonName={appLocalization.contunueGame}
          style={buttonStyle.container}
        />
      </View>
    </ImageBackground>
  );
};

export default ResultScreen;
