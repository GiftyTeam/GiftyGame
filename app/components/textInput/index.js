import {colors} from '../../modules/utils/colors';
import {TextInput} from 'react-native';
import {styles} from './styles';
import React from 'react';

const Input = ({value, placeholder, inputStyle, onChangeText, ...rest}) => {
  return (
    <TextInput
      placeholderTextColor={colors.silver}
      style={[styles.input, inputStyle]}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      rest={rest}
    />
  );
};

export default Input;
