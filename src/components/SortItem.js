import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const SortItem = ({
  title,
  alias,
  selectedSortOption,
  onPress = (_) => {},
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: colorStyles.SecondaryActive,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      onPressOut={onPress}
    >
      <Text style={{ ...textStyles.H3, color: "#36354A" }}>{title}</Text>
      <Feather
        name="check"
        size={24}
        color="black"
        style={selectedSortOption == alias ? { opacity: 1 } : { opacity: 0 }}
      />
    </TouchableOpacity>
  );
};

export default SortItem;
