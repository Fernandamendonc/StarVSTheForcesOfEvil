import React from 'react';

import { Home } from "./src/screens/Home";

import { ThemeProvider } from 'styled-components/native';
import THEME from './src/theme';

import { StatusBar } from 'expo-status-bar'

import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar 
        style="light" 
        translucent 
        backgroundColor="transparent"
      />
      <Home />
    </ThemeProvider>
  );
}
