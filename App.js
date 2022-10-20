import { useFonts } from "expo-font";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PortalProvider } from "@gorhom/portal";

import Members from "./src/screens/Members";
import Profile from "./src/screens/Profile";
import Issues from "./src/screens/Issues";
import Discussions from "./src/screens/Discussions";

const Stack = createNativeStackNavigator();

export default function App() {
  let fontsLoaded = useFonts({
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded[0]) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Issues">
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Products"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Members"
            component={Members}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UserDetails"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Issues"
            component={Issues}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Discussion"
            component={Discussions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
