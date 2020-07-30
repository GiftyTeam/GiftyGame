import React, {useState} from 'react';
import {Text, StyleSheet, Alert} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors} from '../../../modules/utils/colors';

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

const styles = StyleSheet.create({
  cell: {
    width: 40,
    height: 62,
    fontSize: 38,
    lineHeight: 62,
    borderWidth: 5,
    borderRadius: 5,
    color: 'white',
    marginHorizontal: 10,
    backgroundColor: colors.mosque,
    borderColor: colors.fountainBlue,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default CodeFieldComponent;
