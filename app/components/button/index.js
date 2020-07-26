import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

const ButtonComponent = ({name, onPress, isDisabled = true}) => {
  const backgroundColor = isDisabled
    ? colors.pickledBluewood
    : colors.robinsBlue;
  return (
    <TouchableOpacity
      style={{...styles.btn, backgroundColor: backgroundColor}}
      onPress={onPress}
      disabled={isDisabled}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
