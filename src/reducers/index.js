import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import Reactotron from '../../ReactotronConfig' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["user"],
}

import user from './User';
import market from './Market';

const persistedReducer = persistReducer(persistConfig, combineReducers({
    user,
    market,
}));

const store = createStore(persistedReducer, Reactotron.createEnhancer());
const persistor = persistStore(store);

export {
    store, persistor
};