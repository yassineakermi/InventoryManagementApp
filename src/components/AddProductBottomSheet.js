import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useState, useRef } from "react";
import InputField from "./InputField";
import { textStyles, colorStyles } from "../utils/GlobalStyles";

const AddProductBottomSheet = ({ closeModal = (_) => {} }) => {
  const [productName, setProductName] = useState("");

  const handleProductNameChange = (str = "") => {
    setProductName(str);
  };
  const [size_xs, setSizeXS] = useState("");

  const handleSizeXS = (str = "") => {
    setSizeXS(str);
  };
  const [size_s, setSizeS] = useState("");

  const handleSizeS = (str = "") => {
    setSizeS(str);
  };
  const [size_m, setSizeM] = useState("");

  const handleSizeM = (str = "") => {
    setSizeM(str);
  };
  const [size_l, setSizeL] = useState("");

  const handleSizeL = (str = "") => {
    setSizeL(str);
  };
  const [size_xl, setSizeXL] = useState("");

  const handleSizeXL = (str = "") => {
    setSizeXL(str);
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
      <Text style={{ ...textStyles.H1, marginBottom: 10 }}>Add Product</Text>
      <InputField
        placeholder="Product Name"
        onTextChange={handleProductNameChange}
        textState={productName}
      />

      <View style={styles.sizeInputsRow}>
        <InputField
          placeholder="XS"
          onTextChange={handleSizeXS}
          textState={size_xs}
          style={styles.sizeInput}
          keyboardType="numeric"
        />
        <InputField
          placeholder="S"
          onTextChange={handleSizeS}
          textState={size_s}
          style={styles.sizeInput}
          keyboardType="numeric"
        />
        <InputField
          placeholder="M"
          onTextChange={handleSizeM}
          textState={size_m}
          style={styles.sizeInput}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.sizeInputsRow}>
        <InputField
          placeholder="L"
          onTextChange={handleSizeL}
          textState={size_l}
          style={styles.sizeInput}
          keyboardType="numeric"
        />
        <InputField
          placeholder="XL"
          onTextChange={handleSizeXL}
          textState={size_xl}
          style={styles.sizeInput}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.signin_btn} onPress={closeModal}>
        <Text
          style={[
            textStyles.H3,
            { color: colorStyles.White, alignSelf: "center" },
          ]}
        >
          Add Product
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sizeInputsRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  sizeInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  signin_btn: {
    paddingVertical: 16,
    backgroundColor: colorStyles.StrongBlue,
    borderRadius: 12,
    marginHorizontal: 34,
    position: "absolute",
    bottom: 30,
    width: "60%",
    alignSelf: "center",
  },
});
export default AddProductBottomSheet;
