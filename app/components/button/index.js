import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

const Button = ({name, onPress, isDisabled = true}) => {
  const backgroundColor = isDisabled
    ? colors.pickledBluewood
    : colors.robinsBlue;
  return (
    <View
      style={{...styles.button, backgroundColor}}
      onStartShouldSetResponder={onPress}
      disabled={isDisabled}>
      <Text style={styles.buttonText}>{name}</Text>
    </View>
  );
};

export default Button;
