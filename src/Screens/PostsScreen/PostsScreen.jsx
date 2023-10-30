import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
function PostsScreen() {
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
export default PostsScreen;

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
        paddingLeft: 16,
        paddingRight: 16,
    },
    conteinerUser: {
        height: "100%",
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
    }
})