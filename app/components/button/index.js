import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import React from 'react';

const Button = ({onPress, buttonName, style, ...rest}) => {
  return (
    <View
      style={[styles.buttonContainer, style]}
      onStartShouldSetResponder={onPress}
      rest={rest}>
      <Text style={styles.buttonName}>{buttonName}</Text>
    </View>

  );
};

export default Button;
