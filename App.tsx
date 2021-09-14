import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MainNavigator from './src/Navigation/MainNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
