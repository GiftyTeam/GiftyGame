import React,{forwardRef} from 'react';
import {View, TextInput,Dimensions} from 'react-native';
import styles from './styles';
import {colors} from '../../modules/utils/colors';

const Input = forwardRef((props, ref)=> {
  return (
    <View>
      <TextInput
        ref={ref}
        style={[styles.input,{width:props.isPhoneNumber?'100%':Math.round(Dimensions.get('window').width-73) }, props.style]}
        value={props.value}
        maxLength={props.isPhoneNumber ? 19 : 40}
        onChangeText={props.onChangeText}
        keyboardType={props.isPhoneNumber ? 'phone-pad' : 'default'}
        placeholder={props.placeholder}
        placeholderTextColor={colors.silver}
        onFocus={props.onFocus}
      />
    </View>
  );
});

export default Input;
// ({
//   placeholder,
//   style,
//   value,
//   onChangeText,
//   isPhoneNumber = false,
//   ...rest
// }) 