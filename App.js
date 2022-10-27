import React, { useRef, useState } from "react";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useAuthentication } from "./src/utils/hooks/useAuthentication";
import UserStack from "./src/navigation/userStack";
import AuthStack from "./src/navigation/authStack";
import AppContext from "./src/context/AppContext";
import Drawer from "./src/components/Drawer";
export default function App() {
  const { user } = useAuthentication();
  const drawer = useRef(null);
  const golalState = {
    user,
    drawer,
  };

  let fontsLoaded = useFonts({
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded[0]) return null;
  return (
    <AppContext.Provider value={golalState}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {user ? <UserStack /> : <AuthStack />}
      </GestureHandlerRootView>
    </AppContext.Provider>
  );
}
