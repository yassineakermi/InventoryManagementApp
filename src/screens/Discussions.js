import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useRef } from "react";
import Header from "../components/Header";
import { colorStyles } from "../utils/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import DiscussionBody from "../components/DiscussionBody";

const Discussions = ({ navigation, route }) => {
  const leftButtons = [
    <TouchableOpacity onPress={(_) => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color={colorStyles.StrongBlue} />
    </TouchableOpacity>,
  ];

  const rightButtons = [
    <Image
      source={{
        uri: "https://i.ibb.co/QfJ4Fcz/9f74535608abc523efe3eb37a9a30a54.jpg",
      }}
      style={{
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: route.params.isOnline
          ? "#0fcc45"
          : colorStyles.StrongBlue10,
      }}
    />,
  ];
  const windowHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={route.params.profileinfo.name}
        leftButtons={leftButtons}
        rightButtons={rightButtons}
        titleCentered={true}
      />
      <DiscussionBody
        navigation={navigation}
        profileinfo={route.params.profileinfo}
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

export default Discussions;
