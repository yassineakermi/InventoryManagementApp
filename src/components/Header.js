import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";
const Header = ({ title, rightButtons = [] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          ...styles.headerRight,
          justifyContent:
            rightButtons.length > 2
              ? "space-between"
              : rightButtons.length > 1
              ? "space-evenly"
              : "center",
        }}
      >
        {rightButtons}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: colorStyles.White,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: colorStyles.SecondaryActive,
  },
  title: {
    color: colorStyles.Dark100A,
    ...textStyles.H1,
    flex: 7,
    alignSelf: "flex-start",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default Header;
