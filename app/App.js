import {PersistGate} from 'redux-persist/integration/react';
import AppStack from './modules/navigation/appStack';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store, Pstore} from '../store';
import React from 'react';
import WaitingCodeScreen from './view/waitingCodeScreen';

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={Pstore}>
    //     <AppStack />

    //   </PersistGate>
    // </Provider>
    <WaitingCodeScreen />
  );
};

export default App;