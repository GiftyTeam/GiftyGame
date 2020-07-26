import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import AppStack from './modules/navigation/appStack';
import {Provider} from 'react-redux';
import {store, Pstore} from '../store';

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
