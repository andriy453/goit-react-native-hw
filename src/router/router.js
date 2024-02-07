import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import RegisterScreen from '../Screens/AuthScreens/RegistrationScreen.jsx';

import HomeScreen from '../Screens/PostsScreen/Home.jsx';
import CommentsScreen from '../Screens/CommentsScreen.jsx';
import MapScreen from '../Screens/MapScreen.jsx';

const Stack = createStackNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: styles.header,
          headerTitleStyle: styles.title,
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegisterScreen}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: styles.header,
        headerTitleStyle: styles.title,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: 'Коментарі',
        }}
        name="Comments"
        component={CommentsScreen}
      />
      <Stack.Screen
        options={{
          title: 'Мапа',
        }}
        name="Map"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({

});