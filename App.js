import * as React from "react";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Register from "./src/Screens/AuthScreens/RegistrationScreen";
import Login from "./src/Screens/AuthScreens/LoginScreen";
import Home from "./src/Screens/PostsScreen/Home";
import SvgLogaut from "./assets/svg/svgLogaut";
const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Публікації",
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 17,
              lineHeight: 22,
              letterSpacing: -0.408,
            },
            headerRight: () => (
              <TouchableOpacity
                style={styles.btnLogaut}
                onPress={() => alert("This is a button!")}
              >
                <SvgLogaut />
              </TouchableOpacity>
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
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
