import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

const Input = ({
  placeholder,
  style,
  value,
  onChangeText,
  isPhoneNumber = false,
  ...rest
}) => {
  return (
    <View>
      <TextInput
        style={[styles.input, style]}
        value={value}
        maxLength={isPhoneNumber ? 19 : 40}
        onChangeText={onChangeText}
        keyboardType={isPhoneNumber ? 'phone-pad' : 'default'}
        placeholder={placeholder}
        placeholderTextColor={colors.silver}
        rest={rest}
      />
    </View>
  );
};

export default Input;
