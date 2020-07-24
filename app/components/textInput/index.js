import React from 'react';
import {colors} from '../../modules/utils/colors';
import {TextInput} from 'react-native';
import {styles} from './styles';

const Input = ({value, placeholder, style, onChangeText, ...rest}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.silver}
      style={[styles.inputText, styles.input, style]}
      onChangeText={onChangeText}
      value={value}
      rest={rest}
    />
  );
};

export default Input;
