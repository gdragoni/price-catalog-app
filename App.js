import 'react-native-gesture-handler';
import React from 'react';
import KeyboardManager from 'react-native-keyboard-manager';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './src/routes';
import { store, persistor } from './src/reducers';
import { Platform } from 'react-native';

const App: () => React$Node = () => {
  if(Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
  }
  // Add loading PersistGate
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;