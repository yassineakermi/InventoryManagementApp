import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import LeftMenuItem from "./LeftMenuItem";
import { MaterialIcons } from "@expo/vector-icons";
import { auth } from "../../firebaseConfig";

const LeftSideMenu = ({ drawer }) => {
  const navigation = useNavigation();
  const onPressLeftMenuItem = (screenName = "Products") => {
    navigation.navigate(screenName);
    drawer?.current?.closeDrawer();
  };
  return (
    <View style={styles.container}>
      <Text
        style={{ ...textStyles.H1, paddingHorizontal: 24, marginBottom: 12 }}
      >
        Menu
      </Text>
      <LeftMenuItem
        content="My profile"
        icon={() => (
          <MaterialIcons
            name="account-circle"
            size={32}
            color={colorStyles.StrongBlue}
          />
        )}
        onPress={(_) => onPressLeftMenuItem("Members")}
        isSelected={true}
      />

      <LeftMenuItem
        content="History"
        icon={() => (
          <MaterialIcons
            name="history"
            size={32}
            color={colorStyles.StrongBlue}
          />
        )}
        onPress={(_) => {
          onPressLeftMenuItem("Products");
        }}
      />
      <LeftMenuItem
        content="Logout"
        icon={() => (
          <MaterialIcons
            name="logout"
            size={32}
            color={colorStyles.StrongBlue}
          />
        )}
        onPress={async (_) => {
          try {
            await auth.signOut();
          } catch (err) {
            console.log(err);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: colorStyles.White,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colorStyles.ExtraWhite,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  menuItemText: {
    ...textStyles.Body_SemiBold,
    marginLeft: 10,
  },
});
export default LeftSideMenu;
