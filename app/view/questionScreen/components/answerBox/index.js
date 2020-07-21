import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {colors} from '../../../../modules/utils/colors';
import CheckBox from '../checkBox';

const AnswerBox = ({answer, onPress, disabled, selectedAnswer, answerID}) => {
  return (
    <TouchableOpacity activeOpacity={1} disabled={disabled} onPress={onPress} style={styles.container}>
      <Text style={styles.answerText}>{answer}</Text>
      <CheckBox answerID={answerID} disabled={disabled} onPress={onPress}/>
    </TouchableOpacity>
  );
};

export default AnswerBox;
