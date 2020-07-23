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
import location from './Location';
import filter from './Filter';
import products from './Product';
import comments from './Comment';

const persistedReducer = persistReducer(persistConfig, combineReducers({
    user,
    market,
    location,
    filter,
    products,
    comments,
}));

const store = createStore(persistedReducer, Reactotron.createEnhancer());
const persistor = persistStore(store);

export {
    store, persistor
};