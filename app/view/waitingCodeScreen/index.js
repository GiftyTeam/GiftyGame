import React, {useEffect} from 'react';
import {
  ImageBackground,
  Image,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import styles from './styles';
import {imgPath} from '../../modules/utils/images';
import appLocalization from '../../localization/localization';
import Button from '../../components/button';
import {colors} from '../../modules/utils/colors';
import Timer from './components/Timer';
import CodeFieldComponent from './components/CodeField';
import {connect} from 'react-redux';
import {
  selectIsCodeValidate,
  setCodeValidated,
  selectConfirmCode,
  selectEnteredCode,
} from './redux/codeValidation';

const mapStateToProps = (state) => ({
  isValidated: selectIsCodeValidate(state),
  confirm: selectConfirmCode(state),
  code: selectEnteredCode(state),
});

const WaitingCodeScreen = connect(mapStateToProps, {setCodeValidated})(
  ({navigation, isValidated, setCodeValidated, confirm, code}) => {
    useEffect(() => {
      setCodeValidated(false);
    }, []);
    const confirmCode = async (code) => {
      try {
        await confirm.confirm(code);
        navigation.navigate('Profile');
      } catch (error) {
        console.log('Invalid code.', error);
      }
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
          <ImageBackground
            source={imgPath.mainBackground}
            style={styles.container}>
            <StatusBar backgroundColor={colors.wedgewood} />
            <View style={styles.logoWrapper}>
              <Image source={imgPath.logo} style={styles.logo} />
            </View>
            <View style={styles.codeWrapper}>
              <CodeFieldComponent />
              <Button
                name={appLocalization.nextButton}
                isDisabled={!isValidated}
                onPress={() => {
                  confirmCode(code);
                }}
              />
              <Timer onPress={() => navigation.navigate('Registration')} />
              <View style={{flex: 1}} />
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  },
);
export default WaitingCodeScreen;
