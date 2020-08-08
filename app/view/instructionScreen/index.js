import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import ImageSlider from './components/imageSlider';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import BackIcon from '../../components/backIcon';
import {styles} from './styles';

const InstructionScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={imgPath.mainBackground}>
      <StatusBar backgroundColor={colors.bostonBlue} />
      <View style={[styles.container, {flex: 1}]}>
        <View style={{flex: 0.1}}>
          <BackIcon navigation={navigation} />
        </View>
        <View style={{flex: 0.9}}>
          <ImageSlider />
        </View>
      </View>
    </ImageBackground>
  );
};
export default InstructionScreen;
