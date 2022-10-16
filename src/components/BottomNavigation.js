import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colorStyles, textStyles } from "../utils/GlobalStyles";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const BottomNavigation = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Ionicons
          name="ios-chatbubble-ellipses-outline"
          size={20}
          color={colorStyles.Dark60}
        />
        <Text style={{ ...textStyles.Help_text, color: colorStyles.Dark60 }}>
          Issues
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Fontisto name="shopping-store" size={20} color={colorStyles.Dark60} />
        <Text style={{ ...textStyles.Help_text, color: colorStyles.Dark60 }}>
          Inventory
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ justifyContent: "space-between", alignItems: "center" }}
        onPress={(_) => navigation.navigate("Members")}
      >
        <Feather name="users" size={20} color={colorStyles.Dark60} />
        <Text style={{ ...textStyles.Help_text, color: colorStyles.Dark60 }}>
          Team
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    height: 70,
    paddingTop: 15,
    borderColor: colorStyles.SecondaryActive,
  },
});

export default BottomNavigation;