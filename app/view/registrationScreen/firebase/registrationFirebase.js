import firebase from 'react-native-firebase';
import {Alert} from 'react-native';
import fbApp from '../../../API/firebaseInit';

fbApp.auth.languageCode = 'en';

export const signIn = (phoneNumber) => {
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber)
    .then((confirmResult) => {
      console.log('confirmResult', confirmResult);
    })
    .catch((error) => {
      Alert.alert(error.message);
      console.log(error);
    });
};
