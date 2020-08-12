import {ImageBackground, StatusBar, View} from 'react-native';
import ImageSlider from './components/imageSlider';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import {styles} from './styles';
import React from 'react';

const InstructionScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={imgPath.mainBackground}>
      <StatusBar backgroundColor={colors.bostonBlue} />
      <View style={[styles.container, {flex: 1}]}>
        <View style={{flex: 0.1}}></View>
        <View style={{flex: 0.78}}>
          <ImageSlider navigation={navigation} />
        </View>
        <View style={{flex: 0.12}}></View>
      </View>
    </ImageBackground>
  );
};
export default InstructionScreen;
