import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ data = [], style = {}, getHeader = () => {} }) => {
  const itemRenderer = ({ item, index }) => {
    return (
      <ProductItem name={item.name} image={item.image} sizes={item.sizes} />
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={itemRenderer}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index}
      style={{
        margintop: 10,
        flexGrow: 0,
        ...style,
      }}
      ListHeaderComponent={getHeader}
    />
  );
};

export default ProductsList;
