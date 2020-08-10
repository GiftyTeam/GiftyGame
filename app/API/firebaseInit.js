// import * as firebase from 'firebase';
import firebase from 'react-native-firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDY829ScCpcuu-IY8jYnG9VxZBnQ3T1_Sk',
  authDomain: 'giftyapp-d0dfa.firebaseapp.com',
  databaseURL: 'https://giftyapp-d0dfa.firebaseio.com',
  projectId: 'giftyapp-d0dfa',
  storageBucket: 'giftyapp-d0dfa.appspot.com',
  messagingSenderId: '234792527478',
  appId: '1:234792527478:web:2c6009149d959abcb6e157',
  measurementId: 'G-BBFLW90QHQ',
};

firebase.initializeApp(firebaseConfig);

const fbApp = {
  root: firebase,
  db: firebase.database(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};

export default fbApp;
