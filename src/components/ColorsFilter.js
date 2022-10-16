import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ColorFilterItem from "./ColorFilterItem";
const ColorsFilter = ({ colors = [], style = {} }) => {
  const itemRenderer = ({ item }) => {
    return (
      <ColorFilterItem
        color={item}
        isSelected={selectedColors.indexOf(item) > -1}
        onPress={handleColorsChange}
      />
    );
  };

  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorsChange = (color = "") => {
    let newSelectedColors = [];
    if (selectedColors.indexOf(color) > -1) {
      newSelectedColors = selectedColors.filter((col) => color != col);
    } else newSelectedColors = [...selectedColors, color];
    setSelectedColors(newSelectedColors);
  };
  return (
    <FlatList
      data={colors}
      renderItem={itemRenderer}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{ ...styles.container, ...style }}
    />
  );
};

export default ColorsFilter;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexGrow: 0,
    marginBottom: 10,
  },
});
