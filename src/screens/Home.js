import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { colorStyles } from "../utils/GlobalStyles";
const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: colorStyles.White, height: "100%" }}
    >
      <Text style={{ marginTop: 100 }}>{route.name}</Text>
    </SafeAreaView>
  );
};

export default Home;
