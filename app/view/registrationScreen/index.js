import React, {useState, useRef} from 'react';
import {
  ImageBackground,
  Image,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import Button from '../../components/button';
import {colors} from '../../modules/utils/colors';
import styles from './styles';
import TextInputMask from 'react-native-text-input-mask';
import {phoneSignIn} from './firebasePhoneAuth/firebasePhoneAuth';

const RegistrationScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const phoneRef = useRef(null);
  const REGX = /^[\+][9][9][4]\s[(](50|51|77|70|55|99)[)]\s\d{3}[-]\d{2}[-]\d{2}/;
  const validateNumber = () => {
    if (REGX.test(inputValue)) {
      phoneSignIn(inputValue, navigation.navigate('WaitingCode'));
      console.log('signIN clicked');
    } else {
      Alert.alert('Not correct phone number');
    }
  };
  const DISABLED = inputValue.length === 19 ? false : true;
  const PLACEHOLDER_TEXT = '+994 (xx) xxx-xx-xx';

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <StatusBar backgroundColor={colors.wedgewood} />
      <ImageBackground
        source={imgPath.mainBackground}
        style={styles.imageBackground}>
        <Image source={imgPath.logo} style={styles.logo} />
        <View style={styles.inputContainer}>
          <TextInputMask
            placeholder={PLACEHOLDER_TEXT}
            keyboardType="phone-pad"
            placeholderTextColor="silver"
            refInput={(ref) => {
              phoneRef === ref;
            }}
            style={styles.input}
            onChangeText={(formatted, extracted) => {
              setInputValue(formatted);
            }}
            mask={'+994 ([00]) [000]-[00]-[00]'}
          />
          <Button
            name={appLocalization.nextButton}
            isDisabled={DISABLED}
            onPress={validateNumber}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
export default RegistrationScreen;
