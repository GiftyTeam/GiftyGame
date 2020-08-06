import React, {useState} from 'react';
import {Text, Alert, Dimensions} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {styles} from './styles';
import {connect} from 'react-redux';
import {setCodeValidated} from '../../redux/codeValidation';

const CodeFieldComponent = connect(null, {setCodeValidated})(
  ({setCodeValidated}) => {
    const [value, setValue] = useState('');
    const valueValidation = (value) => {
      if (isNaN(value)) {
        Alert.alert('Please enter correct OTP');
      } else {
        setValue(value);
        setCodeValidated(true);
      }
    };

    const codeValidation = () =>
      value.length === 6 ? setCodeValidated(true) : null;
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
        rootStyle={styles.container}
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
  },
);

export default CodeFieldComponent;
