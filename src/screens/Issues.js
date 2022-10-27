import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import Header from "../components/Header";
import { colorStyles } from "../utils/GlobalStyles";
import BottomNavigation from "../components/BottomNavigation";
import { Feather } from "@expo/vector-icons";
import ChatsList from "../components/ChatsList";
import AppContext from "../context/AppContext";

const Issues = ({ navigation, route }) => {
  const context = useContext(AppContext);
  const leftButtons = [
    <TouchableOpacity onPress={() => context?.drawer?.current?.openDrawer()}>
      <Feather name="menu" size={24} color={colorStyles.StrongBlue} />
    </TouchableOpacity>,
  ];

  const rightButtons = [
    <TouchableOpacity onPress={(_) => {}}>
      <Feather name="search" size={24} color={colorStyles.StrongBlue} />
    </TouchableOpacity>,
  ];
  const windowHeight = Dimensions.get("window").height;

  const chatlist = [
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "The product #10096325 is no longer available, we should re-stock.",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={"Chat"}
        rightButtons={rightButtons}
        leftButtons={leftButtons}
      />

      <ChatsList
        data={chatlist}
        navigation={navigation}
        route={route}
        style={{ height: windowHeight - 140 }}
      />

      <BottomNavigation
        navigation={navigation}
        route={route}
        style={{ position: "absolute", bottom: 0, width: "100%" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colorStyles.White,
    position: "relative",
  },
});

export default Issues;
