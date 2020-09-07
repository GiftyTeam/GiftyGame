import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

const Button = ({name, onPress, isDisabled = true, buttonStyle}) => {
  const backgroundColor = isDisabled
    ? colors.pickledBluewood
    : colors.robinsBlue;
  return (
    <Pressable
      style={[{...styles.button, backgroundColor}, buttonStyle]}
      onPress={onPress}
      disabled={isDisabled}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
};

export default Button;
