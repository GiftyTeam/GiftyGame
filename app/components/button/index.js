import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

const Button = ({name, onPress, style, isDisabled = true}) => {
  const backgroundColor = isDisabled
    ? colors.pickledBluewood
    : colors.robinsBlue;
  return (
    <View
      style={{...styles.btn, backgroundColor: backgroundColor, ...style}}
      onStartShouldSetResponder={onPress}
      disabled={isDisabled}>
      <Text style={styles.btnText}>{name}</Text>
    </View>
  );
};

export default Button;
