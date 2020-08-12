import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

<<<<<<< HEAD
const Button = ({name, onPress, isDisabled = true, ref}) => {
=======
const Button = ({name, onPress, isDisabled = true,buttonStyle}) => {
>>>>>>> 0bb982c1a6e75069262d0f0a486579ea82732c0b
  const backgroundColor = isDisabled
    ? colors.pickledBluewood
    : colors.robinsBlue;
  return (
    <Pressable
      style={[{...styles.button, backgroundColor},buttonStyle]}
      onPress={onPress}
      disabled={isDisabled}
      ref={ref}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
};

export default Button;
