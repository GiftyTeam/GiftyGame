import React from 'react';
import {View, Text} from 'react-native';
import {scoreStyle} from './styles';
import appLocalization from '../../../localization/localization';

const ScoreComponent = () => {
  return (
    <View style={scoreStyle.scoreComponent}>
      <Text style={scoreStyle.scoreText}>5000 </Text>
      <Text style={scoreStyle.scoreText}>{appLocalization.score}</Text>
    </View>
  );
};

export default ScoreComponent;