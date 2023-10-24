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
    Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";


const Login = () => {
    const [emeil, setEmeil] = useState("");
    const [password, setPassword] = useState("");
    const [isFocused, setIsFocused] = useState(true);
          const [isFocusedEmeil, setIsFocusedEmeil] = useState(true);
      const onLogin = () => {
          Alert.alert("Credentials", `${emeil} + ${password}`);
      };
         const  handleFocus = (e) => {setIsFocused( true)}

    const handleBlur = () => { setIsFocused(false) }
    const handleBluremeil   = () => { setIsFocusedEmeil(false) }
    const handleFocusemeil = (e) => {setIsFocusedEmeil( true)}
    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View >
            <ImageBackground
                style={[styles.backgroundImage]}
                source={require("../../../assets/img/goru.jpg")}
            >
        
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "position" : "height"}
                    style={{ flex: 1, justifyContent: "flex-end" }}
                >
                    <View style={styles.conteiner}>

                        <Text style={[styles.title]}>Увійти</Text>
                        <Pressable >
                                <TextInput
                                    onFocus={handleFocusemeil}
                                    onBlur={handleBluremeil}
                                    style={[styles.input,{
                                     borderColor: isFocusedEmeil
                                          ? '#FF6C00'
                                            : "#E8E8E8",
                                         backgroundColor: isFocusedEmeil
                                          ? '#FFF'
                                          : "#F6F6F6",
                                  }]}
                                placeholder="Адреса електронної пошти"
                                value={emeil}
                                onChangeText={setEmeil}
                            />
                        </Pressable>
                        <Pressable style={[styles.inputtextPosition]}>
                            <TextInput
                                        onFocus={handleFocus}
                                 onBlur={handleBlur}
                                    style={[styles.input,{
                                     borderColor: isFocused
                                          ? '#FF6C00'
                                            : "#E8E8E8",
                                          backgroundColor: isFocused
                                          ? '#FFF'
                                          : "#F6F6F6",
                                  }]}
                                placeholder="Пароль"
                                value={password}
                                onChangeText={setPassword}/>
                            <TouchableOpacity>
                                <Text style={styles.paswordShow}>Показати</Text>
                            </TouchableOpacity>
                        </Pressable>

                        <Pressable>
                            <TouchableOpacity style={[styles.registerBtn]} >
                                <Text style={[styles.registerBtnText]}  onPress={onLogin}>Увійти</Text>
                            </TouchableOpacity>
                        </Pressable>
                        <View style={[styles.loginConteiner]}>
                            <Text style={[styles.acount]}>Немає акаунту? </Text>
                            <TouchableOpacity style={[styles.loginBtn]} >
                                <Text style={[styles.loginBtnText]}> Зареєстуватися</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
            </View>
             </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
  conteiner: {
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingBottom: 141,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
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
    color: "#BDBDBD",
    marginBottom: 10,
    padding: 16,
  },
  registerBtn: {
    fontSize: "16",
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight:32,
    borderRadius: "50%",
    backgroundColor: "#FF6C00",
    marginBottom:16,
  },
  registerBtnText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  loginConteiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
  },
    inputtextPosition: {
    marginBottom:43,
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
    color:"#1B4371",
  },
    loginBtnText: {
      color:'#1B4371',
    },
        acount: {
        color:'#1B4371',
    },


});

export default Login;
