import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const ProductItem = ({ name = "", image = "", sizes = {} }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image != "" ? image : "https://i.ibb.co/tm8RRYt/Img.png",
        }}
        style={{ height: "100%", width: "30%" }}
      />
      <View style={styles.infoView}>
        <Text
          style={{
            color: colorStyles.Dark60,
            ...textStyles.Uppercase,
            fontSize: 12,
            marginTop: 5,
          }}
        >
          {name}
        </Text>
        <View style={styles.sizeView}>
          {Object.entries(sizes).map(([key, value]) => (
            <View style={{ alignItems: "center" }}>
              <Text>{key}</Text>
              <Text>{value}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    borderRadius: 12,
    borderColor: colorStyles.SecondaryActive,
    borderWidth: 0.5,
    height: 100,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  infoView: {
    marginLeft: 10,
    width: "60%",
  },

  sizeView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default ProductItem;
