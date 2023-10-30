import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const CreatePost = () => {
  return (
    <View style={styles.conteinerUser}>
      <Text> create Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteinerUser: {
    height:"100%",
    backgroundColor: "#FFFFFF",
    color: "red",
  },
});

export default CreatePost;
