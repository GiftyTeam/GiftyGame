import React from 'react';
import {View, ImageBackground, StatusBar, Image} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import ScoreComponent from './scoreComponent';
import Description from './description';
import InfoText from './infoText';
import {resultScreenStyles, logoStyle} from './styles';
import Button from '../../components/button/index';
import appLocalization from '../../localization/localization';
import {colors} from '../../modules/utils/colors';

const ResultScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={imgPath.mainBackground}
      style={resultScreenStyles.backgroundImageStyle}>
      <StatusBar backgroundColor={colors.wedgewood} />
      <View style={{flex: 1}}>
        <View style={logoStyle.logoView}>
          <Image source={imgPath.logo} style={logoStyle.logo} />
        </View>

        <View style={resultScreenStyles.container}>
          <ScoreComponent />
          <Description />
          <InfoText />
        </View>

        <View style={resultScreenStyles.buttonView}>
          <Button
            onPress={() => navigation.navigate('Main')}
            name={appLocalization.continue}
            isDisabled={false}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ResultScreen;
