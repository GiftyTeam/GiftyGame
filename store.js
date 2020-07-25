import {createStore, applyMiddleware} from 'redux';
import rootReducer from './app/modules/redux/rootReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

export const store = createStore(persistedReducer, applyMiddleware(logger));

export const Pstore = persistStore(store);
