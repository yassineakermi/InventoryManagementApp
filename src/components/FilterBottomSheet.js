import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import { textStyles, colorStyles } from "../utils/GlobalStyles";
import Categories from "./Categories";
import ColorsFilter from "../components/ColorsFilter";
const FilterBottomSheet = ({ closeModal }) => {
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
      <Text style={{ ...textStyles.H1, marginBottom: 25 }}>Refine Results</Text>

      <Text style={{ ...textStyles.H2 }}>Price</Text>
      <PriceRangeSlider
        max={1000}
        min={0}
        style={{ marginTop: 5, marginBottom: 25 }}
      />

      <Text style={{ ...textStyles.H2 }}>Sizes</Text>
      <Categories
        data={["All", "XS", "S", "M", "L", "XL"]}
        style={{ marginHorizontal: 0, marginTop: 5, marginBottom: 25 }}
      />
      <Text style={{ ...textStyles.H2 }}>Colors</Text>
      <ColorsFilter
        colors={[
          "red",
          "purple",
          "yellow",
          "green",
          "black",
          "grey",
          "orange",
          "brown",
        ]}
      />

      <TouchableOpacity
        style={{
          paddingVertical: 16,
          backgroundColor: colorStyles.StrongBlue,
          borderRadius: 12,
          marginHorizontal: 34,
          position: "absolute",
          bottom: 30,
          width: "60%",
          alignSelf: "center",
        }}
        onPress={closeModal}
      >
        <Text
          style={[
            textStyles.H3,
            { color: colorStyles.White, alignSelf: "center" },
          ]}
        >
          Apply Filters
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterBottomSheet;
