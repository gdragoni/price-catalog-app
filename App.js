import 'react-native-gesture-handler';
import React from 'react';
import KeyboardManager from 'react-native-keyboard-manager';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './src/routes';
import LoadingScreen from './src/screens/Loading';
import { store, persistor } from './src/reducers';
import { Platform, StatusBar } from 'react-native';

const App: () => React$Node = () => {
  if(Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setToolbarDoneBarButtonItemText("Pronto");
    KeyboardManager.setToolbarPreviousNextButtonEnable(true);
  }
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <StatusBar barStyle={"light-content"} />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;