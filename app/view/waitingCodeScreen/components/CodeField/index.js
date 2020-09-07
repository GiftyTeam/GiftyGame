import React, {useState} from 'react';
import {Text, Alert} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
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
  const [cellTextColor, setCellTextColor] = useState('white');
  const checkCode = async (value) => {
    try {
      await confirm.confirm(value);
      setCodeValidated(true);
      setCellTextColor('white');
    } catch (error) {
      setCodeValidated(false);
      setCellTextColor('red');
      console.log('Invalid code.', error);
    }
  };
  const valueValidation = (value) => {
    if (isNaN(value)) {
      Alert.alert('Please enter correct OTP');
    } else {
      setValue(value);
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
      setEnteredCode(value);
      checkCode(value);
      break;
  }
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
          style={[
            styles.cell,
            isFocused && styles.focusCell,
            {color: cellTextColor},
          ]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
});

export default CodeFieldComponent;
