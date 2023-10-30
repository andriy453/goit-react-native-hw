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
import PostsScreen from "./PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";


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
      >
        <Tabs.Screen
          name="Settings"
          component={PostsScreen}
          options={{
            title: "",
            tabBarIcon: () => <SvgFeather />,
            tabBarActiveBackgroundColor: "#FF6C00",
            headerShown: false,
          }}
        
        />
        <Tabs.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            title: "",
            tabBarIcon: () => <SvgAddUser />,
            tabBarActiveBackgroundColor: "#FF6C00",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Profil"
          component={ProfileScreen}
          options={{
            title: "",
            tabBarIcon: ({ color }) => <SvgUser />,
            tabBarActiveBackgroundColor: "#FF6C00",
            headerShown: false,
            tabBarBadgeStyle: "#FF6C00",
            tabBarActiveTintColor:"#FF6C00",
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
        height:"100%",
    backgroundColor: "#FFFFFF",
    color: "red",
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
