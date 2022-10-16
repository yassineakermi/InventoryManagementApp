import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const Categories = ({ data = [], style = {} }) => {
  const itemRenderer = ({ item, index }) => {
    return (
      <CategoryItem
        title={item}
        index={index}
        isSelected={selectedCategories.indexOf(item) > -1}
        onPress={handleCategoriesChange}
      />
    );
  };
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const handleCategoriesChange = (category = "") => {
    let newSelectedCategories = [];
    if (category == "All") newSelectedCategories = ["All"];
    else if (selectedCategories.indexOf(category) > -1) {
      newSelectedCategories = selectedCategories.filter(
        (col) => category != col
      );
    } else newSelectedCategories = [...selectedCategories, category];
    if (category != "All" && newSelectedCategories.indexOf("All") > -1)
      newSelectedCategories = newSelectedCategories.filter(
        (col) => col != "All"
      );
    setSelectedCategories(newSelectedCategories);
  };

  return (
    <FlatList
      data={data}
      renderItem={itemRenderer}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{ ...styles.container, ...style }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: 20,
    flexGrow: 0,
    marginBottom: 10,
  },
});
export default Categories;
