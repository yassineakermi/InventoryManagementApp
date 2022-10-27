import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const LeftMenuItem = ({
  content,
  onPress,
  icon = () => {},
  isSelected = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.menuItem,
        backgroundColor: isSelected
          ? colorStyles.ExtraWhite
          : colorStyles.White,
      }}
    >
      {icon()}
      <Text style={styles.menuItemText}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    display: "flex",
    flexDirection: "row",

    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 12,
  },
  menuItemText: {
    ...textStyles.H3,
    marginLeft: 20,
  },
});

export default LeftMenuItem;
