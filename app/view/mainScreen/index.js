import React from 'react';
import {View, StatusBar, ImageBackground, SafeAreaView} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import ScoreBoard from './scoreBoard';
import DropDown from './DropDown';
import Button from '../../components/button/index';
import appLocalization from '../../localization/localization';
import {buttonStyle} from './styles';

const MainScreen = () => {
  const Modalls = () => {
    return (
      <View style={{marginTop: 45,}}>
        <DropDown />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={imgPath.mainBackground}
        style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor="#41879A" />
        <View style={{flex: 1}}>
          <View style={{marginTop: 45}}>
            <Modalls />
          </View>
          <View style={{paddingTop: 200}}>
            <ScoreBoard />
          </View>
          <View
            style={{
              marginTop: '30%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              buttonName={appLocalization.startGame}
              style={buttonStyle.container}
              onPress={()=>console.log('Start Game')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainScreen;
