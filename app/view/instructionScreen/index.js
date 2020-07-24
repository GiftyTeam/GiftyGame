import appLocalization from '../../localization/localization';
import AppIntroSlider from 'react-native-app-intro-slider';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import Button from '../../components/button';
import React, {useState} from 'react';
import {styles} from './styles';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

const SLIDES = [
  {
    key: `${Math.random(100)}`,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image:
      'https://images.unsplash.com/photo-1595255676545-7c1be5a3b809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    key: `${Math.random(100)}`,
    title: 'Title 2',
    text: 'Other cool stuff',
    image:
      'https://images.unsplash.com/photo-1595264251137-18dd4ca480c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    key: `${Math.random(100)}`,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image:
      'https://images.unsplash.com/photo-1595343823032-8212b01e3084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    key: `${Math.random(100)}`,
    title: 'Title 2',
    text: 'Other cool stuff',
    image:
      'https://images.unsplash.com/photo-1595156066164-410d89ad9a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
];

const InstructionScreen = () => {
  const _renderItem = ({item}) => {
    return (
      <View key={item.key}>
        <Image
          source={{uri: item.image}}
          resizeMode={'cover'}
          style={styles.image}
        />
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <Button
        buttonName={appLocalization.nextButton}
        style={{backgroundColor: colors.pickledBluewood}}
      />
    );
  };
  const _renderDoneButton = () => {
    return (
      <Button
        buttonName={appLocalization.doneButton}
        style={{backgroundColor: colors.robinsBlue}}
      />
    );
  };
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={imgPath.mainBackground}>
      <View style={[styles.container, {flex: 1}]}>
        <AppIntroSlider
          renderNextButton={_renderNextButton}
          renderDoneButton={_renderDoneButton}
          renderItem={_renderItem}
          bottomButton={true}
          data={SLIDES}
        />
      </View>
    </ImageBackground>
  );
};
export default InstructionScreen;
