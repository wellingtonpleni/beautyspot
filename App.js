/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {fonts} from './src/styles/theme.json';
import Routes from './routes';

import {
  DefaultTheme,
  configureFonts,
  Provider as PaperProvider,
} from 'react-native-paper';

import store from './src/store';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    ios: fonts,
    android: fonts,
  }),
  colors: {
    primary: '#7B2CBF',
    background: '#EFEFEF',
    placeholder: '#5E6171',
    text: '#7B2CBF',
  },
};

const App = () => {
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <Routes />
            </PaperProvider>
        </StoreProvider>
    );
};

export default App;
