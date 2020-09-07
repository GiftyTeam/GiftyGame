import {createStore, applyMiddleware} from 'redux';
import rootReducer from './app/modules/redux/rootReducer';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, Thunk),
);

export const Pstore = persistStore(store);
