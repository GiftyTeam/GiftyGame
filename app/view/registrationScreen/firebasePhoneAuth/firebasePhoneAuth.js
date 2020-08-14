import React, {useState} from 'react';
import {Button, TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const phoneSignIn = (phoneNumber, navigateToCodeScreen) => {
  const [confirm, setConfirm] = useState(null);
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log('confirmation', confirmation);
    setConfirm(confirmation);
  }

  if (!confirm) {
    console.log('SMS not sent');
  } else {
    console.log('SMS sent!!!!!');
    navigateToCodeScreen;
  }
};

export const confirmCode = async (code) => {
  try {
    await confirm.confirm(code);
  } catch (error) {
    console.log('Invalid code.', error);
  }
};

// function PhoneSignIn() {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={(text) => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }
