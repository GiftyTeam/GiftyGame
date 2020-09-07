import React from 'react';
import {Text, View} from 'react-native';
import {descriptionStyle} from './styles';

import appLocalization from '../../../localization/localization';
const Description = () => {
  return (
    <View style={descriptionStyle.container}>
      <View style={descriptionStyle.component}>
        <Text style={descriptionStyle.componentText}>
          {appLocalization.trueAnswer}
        </Text>
        <Text style={descriptionStyle.componentText}>12</Text>
      </View>

      <View style={descriptionStyle.component}>
        <Text style={descriptionStyle.componentText}>
          {appLocalization.wrongAnswer}
        </Text>
        <Text style={descriptionStyle.componentText}>12</Text>
      </View>
    </View>
  );
};

export default Description;
