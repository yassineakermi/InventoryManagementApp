import React from "react";
import { DrawerLayoutAndroid, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Drawer = ({ children, ref_, navigationView }) => {
  return (
    <SafeAreaProvider>
      <DrawerLayoutAndroid
        ref={ref_}
        drawerWidth={Dimensions.get("window").width * 0.6}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        {children}
      </DrawerLayoutAndroid>
    </SafeAreaProvider>
  );
};

export default Drawer;
