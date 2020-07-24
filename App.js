import React from 'react';
<<<<<<< Updated upstream
import 'react-native-gesture-handler';
import AppStack from './app/modules/navigation/appStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, Pstore} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Pstore}>
        <AppStack />
      </PersistGate>
    </Provider>
=======
import InstructionScreen from "./app/view/instructionScreen";
import ProfileScreen from "./app/view/profileScreen";

const App = () => {
  return (
    <ProfileScreen />
>>>>>>> Stashed changes
  );
};

export default App;
