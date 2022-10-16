import { View, TouchableOpacity } from "react-native";
import React from "react";
import { colorStyles } from "../utils/GlobalStyles";

const ColorFilterItem = ({ color, isSelected = false, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 5,
      }}
      onPress={(_) => onPress(color)}
    >
      <View
        style={{
          padding: 2,
          borderWidth: 3,
          borderColor: isSelected ? colorStyles.Dark30 : colorStyles.ExtraWhite,
          borderRadius: 50,
          width: 60,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: color,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ColorFilterItem;
