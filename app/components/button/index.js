import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import React from 'react';

const Button = ({onPress, buttonName, style, ...rest}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      onPress={onPress}
      rest={rest}>
      <Text style={styles.buttonName}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default Button;
