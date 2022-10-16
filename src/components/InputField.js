import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const InputField = ({
  placeholder = "",
  textState = "",
  onTextChange = (str) => {},
  next = null,
  style = {},
  keyboardType = "default",
}) => {
  return (
    <View style={{ ...styles.inputView, ...style }}>
      <TextInput
        style={[textStyles.H3, { flex: 1 }]}
        placeholder={placeholder}
        placeholderTextColor={colorStyles.Dark100B}
        onChangeText={onTextChange}
        value={textState}
        keyboardType={keyboardType}
        // onEndEditing={(_) => {
        //   focusInput();
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    borderColor: colorStyles.SecondaryActive,
    borderRadius: 12,
    paddingVertical: 16,
    paddingLeft: 20,
    paddingRight: 16,
    borderWidth: 1.5,
    display: "flex",
    flexDirection: "row",
  },
});

export default InputField;
