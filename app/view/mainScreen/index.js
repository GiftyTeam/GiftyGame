import React from 'react';
import {View, StatusBar, ImageBackground, SafeAreaView} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import ScoreBoard from './scoreBoard';
import DropDown from './DropDown';
import ButtonComponent from '../../components/button/index';


const MainScreen = () => {

  const Modalls = () => {
    return (
      <View style={{marginTop:45}}>
          <DropDown/>
      </View>
      
      
    );
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground
        source={imgPath.mainBackground}
        style={{width: '100%', height: '100%'}}>
         <StatusBar backgroundColor='#41879A'/>
        <View style={{flex:1}}>
        <View style={{marginTop:45}}>
        <Modalls/>
        </View>
        <View style={{paddingTop:220}}>
          <ScoreBoard />
        </View>
        <View>
        <ButtonComponent/>
        </View>
        </View>
      </ImageBackground>

    </SafeAreaView>
  );
};

export default MainScreen;
