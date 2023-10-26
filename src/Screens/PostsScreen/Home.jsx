import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import SvgUser from "../../../assets/svg/svgUser";
import SvgAddUser from "../../../assets/svg/svgAddUser";
import SvgFeather from "../../../assets/svg/svgFeather-icon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CreatePost from "../CreatePostsScreen/CreatePosts";

function Settings() {
  return (
    <View>
      <View style={styles.conteinerUser}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/img/avatar.png")}
        />
        <View>
          <Text style={styles.nameUser}>faefasf</Text>
          <Text style={styles.emeilUser}>fasfas</Text>
        </View>
      </View>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}
const Tabs = createBottomTabNavigator();
const Home = () => {
  const navigation = useNavigation();
  const {
    params: { email, name },
  } = useRoute();

  return (
    <View style={styles.conteiner}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === "Profile") {
              return <SvgUser />;
            } else if (route.name === "Settings") {
              return <SvgFeather />;
            } else if (route.name === "CreatePost") {
              return <SvgAddUser />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "red",
        }}
      >
        <Tabs.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "",
            tabBarIcon: () => <SvgFeather />,
            tabBarActiveBackgroundColor: "red",
              headerShown:false,
          }}
        />
        <Tabs.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            title: "",
            tabBarIcon: () => <SvgAddUser />,
            tabBarActiveBackgroundColor: "red",
             headerShown:false,
          }}
        />
        <Tabs.Screen
          name="Profil"
          component={Profile}
          options={{
            title: "",
            tabBarIcon: ({ color }) => <SvgUser />,
            tabBarActiveBackgroundColor: "red",
             headerShown:false,
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
  },
  conteinerUser: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    marginRight: 8,
  },
  nameUser: {
    color: "#212121",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: " normal",
  },
  emeilUser: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
    fontWeight: 400,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
  },
});
export default Home;
