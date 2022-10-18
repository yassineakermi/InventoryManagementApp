import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";
const Header = ({
  title,
  rightButtons = [],
  leftButtons = [],
  titleCentered = false,
}) => {
  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        const { x, y, width, height } = e.nativeEvent.layout;
        console.log("header", x, y, width, height);
      }}
    >
      {leftButtons.length ? (
        <View
          style={{
            ...styles.header,
            justifyContent:
              rightButtons.length > 2
                ? "space-between"
                : rightButtons.length > 1
                ? "space-evenly"
                : "flex-end",
            flex: leftButtons.length > 2 ? 3 : leftButtons.length > 1 ? 2 : 1,
            marginBottom: 3,
          }}
        >
          {leftButtons}
        </View>
      ) : (
        []
      )}
      <Text
        style={{
          ...styles.title,
          textAlign: titleCentered ? "center" : "auto",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          ...styles.headerButtons,
          justifyContent:
            rightButtons.length > 2
              ? "space-between"
              : rightButtons.length > 1
              ? "space-evenly"
              : "flex-end",
          flex: rightButtons.length > 2 ? 3 : rightButtons.length > 1 ? 2 : 1,
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
    marginLeft: 10,
  },
  headerButtons: {
    display: "flex",
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default Header;
