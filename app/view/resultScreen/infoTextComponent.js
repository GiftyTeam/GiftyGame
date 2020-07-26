import React from 'react'
import { View, Text } from 'react-native'
import {resultScreenStyles} from './styles'

const InfoText = () => {
    return (
        <View style={resultScreenStyles.infoTextView}>    
          <Text style={resultScreenStyles.infoText}>afərin!</Text>
        </View>
    )
}

export default InfoText;
