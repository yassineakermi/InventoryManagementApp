import { View, Text } from "react-native";
import React from "react";

const HomeHeader = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default HomeHeader;
