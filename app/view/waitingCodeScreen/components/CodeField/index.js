import React, {useState} from 'react';
import {Text, Alert} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {styles} from './styles';
import {connect} from 'react-redux';
import {
  setCodeValidated,
  setEnteredCode,
  setUserStartedTypingCode,
  selectConfirmCode,
} from '../../redux/codeValidation';

const mapStateToProps = (state) => ({
  confirm: selectConfirmCode(state),
});

const CodeFieldComponent = connect(mapStateToProps, {
  setCodeValidated,
  setEnteredCode,
  setUserStartedTypingCode,
})(({setCodeValidated, setEnteredCode, setUserStartedTypingCode, confirm}) => {
  const [value, setValue] = useState('');
  console.log('confirm', confirm);

  const checkCode = async (value) => {
    try {
      let codeconfirmation = await confirm.console.log(
        'codeconfirmation',
        codeconfirmation,
      );
      codeconfirmation ? setCodeValidated(true) : setCodeValidated(false);
    } catch (error) {
      console.log('Invalid code.', error);
      Alert.alert('invalid code', error);
    }
  };

  switch (true) {
    case value.length === 1:
      setUserStartedTypingCode(true);
      break;
    case value.length === 0:
      setUserStartedTypingCode(false);
      break;
    case value.length === 6:
      checkCode();
      break;
  }

  const valueValidation = (value) => {
    if (isNaN(value)) {
      Alert.alert('Please enter correct OTP');
    } else if (value.length === 6) {
      setValue(value);
      setEnteredCode(value);
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
});

export default CodeFieldComponent;
