import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {descriptionStyle} from './styles'
import appLocalization from '../../localization/localization';
const Description = () => {
    return (
        <View style={descriptionStyle.container}>

        <View style={descriptionStyle.component}>     
        <Text style={descriptionStyle.componentText}>{appLocalization.trueAnswer}</Text>
        <Text style={descriptionStyle.componentText}>8</Text>
        </View>
        
        <View style={descriptionStyle.component}>     
        <Text style={descriptionStyle.componentText}>{appLocalization.wrongAnswer}</Text>
        <Text style={descriptionStyle.componentText}>4</Text>
        </View>  
        </View>
    )
}

export default Description;


