import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {colors} from '../../../../modules/utils/colors';
import CheckBox from '../checkBox';

const AnswerBox = ({answer, onPress, selectedAnswer, answerID}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.answerText}>{answer}</Text>
      <CheckBox onPress={onPress}/>
    </TouchableOpacity>
  );
};

export default AnswerBox;
