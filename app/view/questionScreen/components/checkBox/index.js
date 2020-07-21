import React from 'react';
import { useSelector } from 'react-redux';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

const CheckBox = ({onPress, disabled, answerID}) => {

  const selectedAnswerID = useSelector(state =>  state.answerReducer.answerID);

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={selectedAnswerID === answerID ? styles.selectedContainer : styles.container}>
      {
       selectedAnswerID === answerID && (
         <Icon
         name="check"
         style={{color: 'white'}}
         />
       ) 
      }
    </TouchableOpacity>
  );
};

export default CheckBox;
