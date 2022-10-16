import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const CategoryItem = ({
  title,
  index,
  selectedCategories = [],
  isSelected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isSelected
            ? colorStyles.StrongBlue
            : colorStyles.White,
        },
      ]}
      onPress={(_) => onPress(title)}
    >
      <Text
        style={{
          color: isSelected ? colorStyles.White : colorStyles.Dark100A,
          ...textStyles.Body_Secondary,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 19,
    paddingVertical: 11,

    borderRadius: 12,
    alignSelf: "flex-start",
    marginRight: 10,
  },
});

export default CategoryItem;
