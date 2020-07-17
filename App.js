import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import store from './src/reducers';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;