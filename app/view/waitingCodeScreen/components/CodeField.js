import React, {useState} from 'react';
import {Text, Alert} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './CodeFieldStyles';

const CodeFieldComponent = () => {
  const [value, setValue] = useState('');
  const valueValidation = (value) => {
    if (isNaN(value)) {
      Alert.alert('Please enter correct OTP');
    } else {
      setValue(value);
    }
  };
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={(v) => valueValidation(v)}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default CodeFieldComponent;
