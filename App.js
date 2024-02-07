import * as React from "react";
import { StyleSheet, View,ActivityIndicator} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';

import Register from "./src/Screens/AuthScreens/RegistrationScreen";
// import Login from "./src/Screens/AuthScreens/LoginScreen";
// import Home from "./src/Screens/PostsScreen/Home";
// import SvgLogaut from "./assets/svg/svgLogaut";
// import Main from './src/components/main/Main.jsx'
// const MainStack = createStackNavigator();
import Main from "./src/components/main/Main.jsx";

import { store } from './src/redux/store.js';

const App = () => {
  const [appIsReady, setAppIsReady] = useState(true);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  });

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Main onLayout={onLayoutRootView} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
  },
  btnLogaut: {
    marginRight: 16,
  },
});

export default App;
