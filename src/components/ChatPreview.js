import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const ChatPreview = ({
  profileinfo = { name: "Yassine Akermi", role: "Web Developer" },
  lastMessage = "Web Developer",
  date = "19:07",
  isOnline = false,
  navigation = null,
}) => {
  const onPress = (_) => {
    navigation.navigate("Chat", { profileinfo, isOnline });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ borderRadius: 50, width: "20%" }}
        onPress={onPress}
      >
        <Image
          source={{
            uri: "https://i.ibb.co/QfJ4Fcz/9f74535608abc523efe3eb37a9a30a54.jpg",
          }}
          style={{
            height: 72,
            width: 72,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: isOnline ? "#0fcc45" : colorStyles.StrongBlue10,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: 10,
          justifyContent: "center",
          width: "60%",
          height: 72,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            ...textStyles.H3,
            color: colorStyles.Dark100A,
          }}
        >
          {profileinfo.name}
        </Text>
        <Text
          style={{
            ...textStyles.Body_16,
            color: colorStyles.Dark100A,
            fontSize: 12,
            lineHeight: 15,
          }}
        >
          {lastMessage}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: 10,
          flex: 1,
          height: 72,
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text
          style={{
            ...textStyles.Body_16,
            color: colorStyles.Dark60,
            fontSize: 12,
          }}
        >
          {date}
        </Text>
        <View
          style={{
            height: 22,
            width: 22,
            borderRadius: 50,
            marginTop: 4,
          }}
        >
          <Text
            style={{
              ...textStyles.Body_SemiBold,
              color: colorStyles.White,
              backgroundColor: colorStyles.StrongBlue,
              textAlign: "center",
              borderRadius: 50,
            }}
          >
            5
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    marginLeft: 24,
    paddingBottom: 10,
    borderColor: colorStyles.SecondaryActive,
    borderBottomWidth: 0.8,
  },
});
export default ChatPreview;
