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
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {
  setConfirmCode,
  selectConfirmCode,
} from '../waitingCodeScreen/redux/codeValidation';
import {addCurrentUserNumber} from './redux/currentUser';

const mapStateToProps = (state) => ({
  confirm: selectConfirmCode(state),
});

const RegistrationScreen = connect(mapStateToProps, {
  setConfirmCode,
  addCurrentUserNumber,
})(({navigation, setConfirmCode, confirm, addCurrentUserNumber}) => {
  const [inputValue, setInputValue] = useState('');
  const phoneRef = useRef(null);
  const REGX = /^[\+][9][9][4]\s[(](50|51|11|70|55|99)[)]\s\d{3}[-]\d{2}[-]\d{2}/;

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirmCode(confirmation);
    if (!confirm) {
      console.log('SMS not sent');
    } else {
      console.log('SMS sent!!!!');
      addCurrentUserNumber(inputValue);
      navigation.navigate('WaitingCode');
    }
  }
  const validateNumber = () => {
    if (REGX.test(inputValue)) {
      signInWithPhoneNumber(inputValue);
      console.log('signIn clicked');
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
        <View style={styles.logoWrapper}>
          <Image source={imgPath.logo} style={styles.logo} />
        </View>
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
});
export default RegistrationScreen;
