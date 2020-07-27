import React from 'react';
import {View, Text} from 'react-native';
import {infoTextStyle} from './styles';

const InfoText = () => {
  return (
    <View style={infoTextStyle.infoTextView}>
      <Text style={infoTextStyle.infoText}>afərin!</Text>
    </View>
  );
};

export default InfoText;
