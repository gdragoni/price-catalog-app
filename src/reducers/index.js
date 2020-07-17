import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

import user from './User';

const persistedReducer = persistReducer(persistConfig, combineReducers({
    user,
}));

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {
    store, persistor
};