import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../modules/utils/colors';
import {styles} from './styles';
import React from 'react';

const BackIcon = ({navigation, style, ...rest}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[styles.backArrow, style]}
      rest={rest}>
      <Icon name={'arrow-left'} solid size={30} color={colors.white} />
    </TouchableOpacity>
  );
};

export default BackIcon;
