import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { textStyles, colorStyles } from "../utils/GlobalStyles";
import SortItem from "./SortItem";
import PriceRangeSlider from "./PriceRangeSlider";
const SortBottomSheet = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("mr");
  const sortOptions = [
    { title: "Sort by Most Recent", alias: "mr" },
    { title: "Sort by Least Recent", alias: "lr" },
    { title: "Sort by Least Available", alias: "la" },
    { title: "Sort by Most Available", alias: "ma" },
    { title: "Sort by Missing Sizes", alias: "ms" },
  ];

  const handleSortOptionChange = (option = "mr") => {
    if (
      option == "mr" ||
      option == "lr" ||
      option == "la" ||
      option == "ma" ||
      option == "ms"
    )
      setSelectedSortOption(option);
  };
  return (
    <View
      style={{
        backgroundColor: colorStyles.ExtraWhite,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex: 1,
        padding: 24,
        position: "relative",
      }}
    >
      <Text style={{ ...textStyles.H1, marginBottom: 10 }}>Sort Results</Text>
      {sortOptions.map((option, index) => (
        <SortItem
          title={option.title}
          alias={option.alias}
          onPress={(_) => handleSortOptionChange(option.alias)}
          selectedSortOption={selectedSortOption}
          key={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SortBottomSheet;
