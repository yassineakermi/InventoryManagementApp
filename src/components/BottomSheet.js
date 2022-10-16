import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";
import { colorStyles } from "../utils/GlobalStyles";

const BottomSheet = ({ modalRef, height, children }) => {
  return (
    <Portal>
      <Modalize
        ref={modalRef}
        modalHeight={height}
        modalStyle={{ borderTopStartRadius: 24, borderTopEndRadius: 24 }}
      >
        <View style={{ height: height }}>{children}</View>
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;
