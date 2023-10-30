import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.conteiner}>
      <Text>Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    conteiner: {
        height: "100%",
        backgroundColor: "#FFFFFF",
        width: "100%",
}

})
export default ProfileScreen;