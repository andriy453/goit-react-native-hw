import * as React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import Register from "./src/Screens/AuthScreens/RegistrationScreen"; 
import Login from "./src/Screens/AuthScreens/LoginScreen";




const App = () => {
  return (
    <View >
 <Login/>
    </View>
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
});

export default App;
