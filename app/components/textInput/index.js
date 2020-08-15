import React from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

const Input = ({
  placeholder,
  style,
  value,
  onChangeText,
  isPhoneNumber = false,
  ScrollRef,
  editable
}) => {
  const scrollOnFocus = () => {
    setTimeout(() => {
      ScrollRef.current?.scrollTo({y: 230});
    }, 500);
  };

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {
            width: isPhoneNumber
              ? '100%'
              : Math.round(Dimensions.get('window').width - 73),
          },
          style,
        ]}
        value={value}
        maxLength={isPhoneNumber ? 19 : 40}
        onChangeText={onChangeText}
        keyboardType={isPhoneNumber ? 'phone-pad' : 'default'}
        placeholder={placeholder}
        placeholderTextColor={colors.silver}
        onFocus={scrollOnFocus}
        editable={editable}
      />
    </View>
  );
};

export default Input;
