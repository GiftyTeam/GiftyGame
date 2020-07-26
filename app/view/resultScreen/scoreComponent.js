import React from 'react'
import { View, Text } from 'react-native'
import {resultScreenStyles} from './styles'
import appLocalization from '../../localization/localization';

const ScoreComponent = () => {
    return (
        <View style={resultScreenStyles.scoreComponent}>    
          <Text style={resultScreenStyles.scoreText}>5000 </Text>
          <Text style={resultScreenStyles.scoreText}>{appLocalization.score}</Text>
      </View>
    )
}

export default ScoreComponent
