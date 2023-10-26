import React, { useState } from "react";

import { StyleSheet, TextInput, View } from "react-native";

const [isFocused, setIsFocused] = useState(true);

const handleFocus = () => {
  setIsFocused(true);
};
const handleBlur = () => {
  setIsFocused(false);
};

export const Input = (onChangeText, state, setState) => {
  return (
    <View>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[
          {
            borderColor: isFocused ? "#FF6C00" : "#E8E8E8",
            backgroundColor: isFocused ? "#FFF" : "#F6F6F6",
          },
        ]}
        value={state}
        onChangeText={setState}
        placeholder={onChangeText}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     borderRadius: 8,
//     border: 5,
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     width: "100%",
//     height: 50,
//     color: "#212121",
//     marginBottom: 10,
//     padding: 16,
//   },
// })
