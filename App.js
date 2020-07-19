import React from 'react';
import 'react-native-gesture-handler';
import AppStack from './app/modules/navigation/appStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './store';
import {Pstore} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Pstore}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
