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

import SvgAddButton from "../../../assets/svg/svgAddButtun";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const onRegister = () => {
  //   // return {name,email,password}
  //   console.log({name,email,password});
  // };

  const [isFocused, setIsFocused] = useState(true);
  const [isFocusedEmail, setIsFocusedEmail] = useState(true);
  const [isFocusedName, setIsFocusedName] = useState(true);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleBluremeil = () => {
    setIsFocusedEmail(false);
  };
  const handleFocusemeil = () => {
    setIsFocusedEmail(true);
  };
  const handleBlurName = () => {
    setIsFocusedName(false);
  };
  const handleFocusName = () => {
    setIsFocusedName(true);
  };
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground
          style={[styles.backgroundImage]}
          source={require("../../../assets/img/goru.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "position" : "height"}
            style={{ flex: 1, justifyContent: "flex-end" }}
          >
            <View style={styles.conteiner}>
              <View style={styles.avatarWrapper}>
                <Image style={styles.avatar} />
                <TouchableOpacity style={styles.btnAddAvatar}>
                  <SvgAddButton style={styles.btnAddAvatarSvgLoad} />
                </TouchableOpacity>
              </View>
              <Text style={[styles.title]}>Реєстрація</Text>
              <Pressable>
                <TextInput
                  onFocus={handleFocusName}
                  onBlur={handleBlurName}
                  style={[
                    styles.input,
                    {
                      borderColor: isFocusedName ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: isFocusedName ? "#FFF" : "#F6F6F6",
                    },
                  ]}
                  value={name}
                  onChangeText={setName}
                  placeholder="Логін"
                />
              </Pressable>
              <Pressable>
                <TextInput
                  onFocus={handleFocusemeil}
                  onBlur={handleBluremeil}
                  style={[
                    styles.input,
                    {
                      borderColor: isFocusedEmail ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: isFocusedEmail ? "#FFF" : "#F6F6F6",
                    },
                  ]}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Адреса електронної пошти"
                />
              </Pressable>
              <Pressable style={[styles.inputtextPosition]}>
                <TextInput
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={[
                    styles.input,
                    {
                      borderColor: isFocused ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: isFocused ? "#FFF" : "#F6F6F6",
                    },
                  ]}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity>
                  <Text style={styles.paswordShow}>Показати</Text>
                </TouchableOpacity>
              </Pressable>

              <Pressable>
                <TouchableOpacity style={[styles.registerBtn]}>
                  <Text
                    style={[styles.registerBtnText]}
                    onPress={() =>
                      navigation.navigate("Home", { email: email, name: name })
                    }
                  >
                    Зареєстуватися
                  </Text>
                </TouchableOpacity>
              </Pressable>
              <View style={[styles.loginConteiner]}>
                <Text style={[styles.acount]}>Вже є акаунт?</Text>
                <TouchableOpacity style={[styles.loginBtn]}>
                  <Text
                    style={[styles.loginBtnText]}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Увійти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
//  { sessionId: 45, userId: "22e24" }
const styles = StyleSheet.create({
  conteiner: {
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: " 0.3px",
    marginBottom: 33,
  },
  input: {
    // position:'relative',
    borderRadius: 8,
    border: 5,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: "100%",
    height: 50,
    color: "#212121",
    marginBottom: 10,
    padding: 16,
  },
  registerBtn: {
    fontSize: "16",
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: "50%",
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  registerBtnText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  loginConteiner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  inputtextPosition: {
    marginBottom: 43,
  },
  backgroundImage: {
    // flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  paswordShow: {
    position: "absolute",
    right: 16,
    top: -43,
    color: "#1B4371",
  },
  button_hover: {
    borderColor: "red",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  avatarWrapper: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  btnAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,

    alignItems: "center",
    alignContent: "center",

    width: 25,
    height: 25,

    color: "#ff6c00",
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  btnAddAvatarLoad: {
    position: "absolute",
    bottom: 14,
    right: -12.5,

    alignItems: "center",
    alignContent: "center",

    width: 25,
    height: 25,

    color: "#ff6c00",
    backgroundColor: "#ffffff",
    borderRadius: 50,

    transform: [{ rotate: "45deg" }],
  },
  btnAddAvatarSvg: {
    fill: "#ff6c00",
    stroke: "#ff6c00",
    backgroundColor: "#ffffff",
  },
  btnAddAvatarSvgLoad: {
    fill: "#bdbdbd",
    stroke: "#e8e8e8",
    backgroundColor: "#ffffff",
  },
  acount: {
    color: "#1B4371",
  },
  loginBtnText: {
    color: "#1B4371",
  },
});

export default Register;
