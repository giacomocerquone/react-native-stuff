import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from './src/store/store';
import AppNavigator from './src/features/app.navigator';
import navService from './src/shared/services/nav';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator
          ref={navigatorRef => navService.setNavigator(navigatorRef)}
        />
      </PersistGate>
    </Provider>
  );
}
