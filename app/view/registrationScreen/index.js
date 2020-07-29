import React, {useState} from 'react';
import {ImageBackground, Image, StatusBar} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import Input from '../../components/textInput';
import Button from '../../components/button';
import {colors} from '../../modules/utils/colors';

const RegistrationScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  let formattedValue = inputValue;
  const format = (inputValue) => {
    if (inputValue.length === 4) {
      formattedValue = inputValue + ' (';
      return formattedValue;
    } else if (inputValue.length === 8) {
      formattedValue = formattedValue + ') ';
      return formattedValue;
    } else if (inputValue.length === 13 || inputValue.length === 16) {
      formattedValue = formattedValue + '-';
      return formattedValue;
    } else {
      return formattedValue;
    }
  };
  format(inputValue);

  const disabled = inputValue.length === 19 ? false : true;

  return (
    <ImageBackground source={imgPath.mainBackground} style={styles.container}>
      <StatusBar backgroundColor={colors.wedgewood} />
      <Image source={imgPath.logo} style={styles.logo} />
      <Input
        placeholder="+994 (xx) xxx - xx - xx"
        isPhoneNumber={true}
        onChangeText={(v) => setInputValue(v)}
        value={formattedValue}
      />
      <Button name={appLocalization.nextButton} isDisabled={disabled} />
    </ImageBackground>
  );
};
export default RegistrationScreen;
