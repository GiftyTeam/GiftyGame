import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

const CheckBox = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
    </TouchableOpacity>
  );
};

export default CheckBox;
