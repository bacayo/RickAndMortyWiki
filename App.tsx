import { useFonts } from 'expo-font';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Router from './src/Router';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
    OpenSansRegular: require('./src/assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
