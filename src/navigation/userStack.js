import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Members from "../screens/Members";
import Profile from "../screens/Profile";
import Issues from "../screens/Issues";
import Discussions from "../screens/Discussions";
import Drawer from "../components/Drawer";
import AppContext from "../context/AppContext";
import LeftSideMenu from "../components/LeftSideMenu";

const Stack = createNativeStackNavigator();
export default function UserStack() {
  const context = useContext(AppContext);
  return (
    <NavigationContainer>
      <Drawer
        ref_={context.drawer}
        navigationView={() => <LeftSideMenu drawer={context.drawer} />}
      >
        <Stack.Navigator initialRouteName="Products">
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
      </Drawer>
    </NavigationContainer>
  );
}
