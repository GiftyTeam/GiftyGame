import React, {useState} from 'react';
import {ImageBackground, Image, StatusBar, Alert} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import Input from '../../components/textInput';
import Button from '../../components/button';
import {colors} from '../../modules/utils/colors';

const RegistrationScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const REGX = /^[\+][9][9][4]\s[(]\d{2}[)]\s\d{3}[-]\d{2}[-]\d{2}/;
  const validateNumber = () => {
    if (REGX.test(inputValue)) {
      navigation.navigate('WaitingCode');
    } else {
      Alert.alert('it is not correct');
    }
  };
  let formattedValue = inputValue;
  function format(value) {
    switch (true) {
      case value.length === 4:
        formattedValue = value + ' (';
        break;
      case value.length === 8:
        formattedValue += ') ';
        break;
      case value.length === 13 || value.length === 16:
        formattedValue += '-';
        break;
      default:
        return formattedValue;
    }
  }
  format(inputValue);
  const DISABLED = inputValue.length === 19 ? false : true;
  const PLACEHOLDER_TEXT = '+994 (xx) xxx - xx - xx';

  return (
    <ImageBackground source={imgPath.mainBackground} style={styles.container}>
      <StatusBar backgroundColor={colors.wedgewood} />
      <Image source={imgPath.logo} style={styles.logo} />
      <Input
        placeholder={PLACEHOLDER_TEXT}
        isPhoneNumber={true}
        onChangeText={(v) => setInputValue(v)}
        value={formattedValue}
      />
      <Button
        name={appLocalization.nextButton}
        isDisabled={DISABLED}
        onPress={validateNumber}
      />
    </ImageBackground>
  );
};
export default RegistrationScreen;
