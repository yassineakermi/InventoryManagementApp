import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import Header from "../components/Header";
import { colorStyles } from "../utils/GlobalStyles";
import BottomNavigation from "../components/BottomNavigation";
import { Feather } from "@expo/vector-icons";
import ChatsList from "../components/ChatsList";
const Issues = ({ navigation, route }) => {
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
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
    {
      profileinfo: { name: "Yassine Akermi", role: "Web Developer" },
      isOnline: false,
      date: "20:48",
      lastMessage:
        "I wanted to know, how much to be paid this month as usual please?\n Thanks.",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Chat"} rightButtons={rightButtons} />

      <ChatsList
        data={chatlist}
        navigation={navigation}
        style={{ height: windowHeight - 157 }}
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
