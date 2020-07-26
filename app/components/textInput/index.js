import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

const Input = ({placeholder, isPhoneNumber = false}) => {
  const [inputValue, setInputValue] = useState('');
  let formattedValue = inputValue;
  const format = (inputValue) => {
    if (inputValue.length === 4) {
      formattedValue = inputValue + ' (';
      return formattedValue;
    } else if (inputValue.length === 8) {
      formattedValue = formattedValue + ') ';
      return formattedValue;
    } else if (inputValue.length === 13 || inputValue.length === 16) {
      formattedValue = formattedValue + '-';
      return formattedValue;
    } else {
      return formattedValue;
    }
  };
  format(inputValue);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={isPhoneNumber ? formattedValue : inputValue}
        maxLength={isPhoneNumber ? 19 : 40}
        onChangeText={(v) => setInputValue(v)}
        keyboardType={isPhoneNumber ? 'phone-pad' : 'default'}
        placeholder={placeholder}
        placeholderTextColor={colors.silver}
      />
    </View>
  );
};

export default Input;
