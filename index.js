import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/AppContainer';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { I18nextProvider } from 'react-i18next';
import i18next from './src/locales/i18n';

const Application = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  );
};

AppRegistry.registerComponent(appName, () => Application);
