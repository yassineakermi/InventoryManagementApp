import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const HomeSearchInput = ({
  placeholder = "You placeholder here",
  icon = "user",
}) => {
  return (
    <View
      style={styles.inputView}
      onLayout={(e) => {
        const { x, y, width, height } = e.nativeEvent.layout;
        console.log("SearchInput", x, y, width, height);
      }}
    >
      <Feather
        style={{ marginRight: 10 }}
        name={icon}
        size={32}
        color={colorStyles.StrongBlue}
      />
      <TextInput
        style={[textStyles.H3, { flex: 1 }]}
        placeholder={placeholder}
        placeholderTextColor={colorStyles.Dark60}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginTop: 20,
    borderColor: colorStyles.SecondaryActive,
    borderRadius: 12,
    paddingVertical: 16,
    paddingLeft: 20,
    paddingRight: 16,
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colorStyles.ExtraWhite,
    marginHorizontal: 24,
  },
});

export default HomeSearchInput;
