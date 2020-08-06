import React from 'react';
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
import {selectIsCodeValidate} from './redux/codeValidation';

const mapStateToProps = (state) => ({
  isValidated: selectIsCodeValidate(state),
});

const WaitingCodeScreen = connect(
  mapStateToProps,
  null,
)(({navigation, isValidated}) => {
  console.log('isvalidated', isValidated);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <ImageBackground
          source={imgPath.mainBackground}
          style={styles.container}>
          <StatusBar backgroundColor={colors.wedgewood} />
          <Image source={imgPath.logo} style={styles.logo} />
          <CodeFieldComponent />
          <Button
            name={appLocalization.nextButton}
            isDisabled={!isValidated}
            onPress={() => navigation.navigate('Profile')}
          />
          <Timer />
          <View style={{flex: 1}} />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
});
export default WaitingCodeScreen;
