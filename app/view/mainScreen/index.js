import React from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import ScoreBoard from './scoreBoard';
import DropDown from './dropDown';
import Button from '../../components/button/index';
import appLocalization from '../../localization/localization';
import {buttonStyle, logoStyle} from './styles';
import {colors} from '../../modules/utils/colors';

const MainScreen = ({navigation}) => {
  const Modalls = () => {
    return (
      <View style={{marginTop: 45}}>
        <DropDown />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={imgPath.mainBackground}
        style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor={colors.wedgewood} />
        <View style={{flex: 1}}>
          <Modalls />

          <View style={logoStyle.logoView}>
            <Image source={imgPath.logo} style={logoStyle.logo} />
          </View>

          <View style={{flex:3}}>
          <ScoreBoard />
          </View>
            
          

          <View style={buttonStyle.buttonView}>
            <Button
              isDisabled={false}
              name={appLocalization.startGame}
              style={buttonStyle.container}
              onPress={()=>navigation.navigate('Photo')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainScreen;
