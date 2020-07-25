import {colors} from '../../modules/utils/colors';
import {TextInput} from 'react-native';
import {styles} from './styles';
import React from 'react';

const Input = ({value, placeholder, style, onChangeText, ...rest}) => {
  return (
    <TextInput
      style={[styles.inputText, styles.input, style]}
      placeholderTextColor={colors.silver}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      rest={rest}
    />
  );
};

export default Input;
