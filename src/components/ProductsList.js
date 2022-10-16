import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ data = [] }) => {
  const itemRenderer = ({ item, index }) => {
    return (
      <ProductItem
        name={item.name}
        image={item.image}
        sizes={item.sizes}
        key={index}
      />
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={itemRenderer}
      showsVerticalScrollIndicator={false}
      style={{
        margintop: 10,
        flexGrow: 0,
        height: "60%",
      }}
    />
  );
};

export default ProductsList;
