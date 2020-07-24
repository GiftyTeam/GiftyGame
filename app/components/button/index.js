import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = ({onPress, buttonName, style, ...rest}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.buttonContainer, style]}
      rest={rest}>
      <Text style={styles.buttonName}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default Button;
