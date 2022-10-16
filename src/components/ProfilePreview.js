import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

const ProfilePreview = ({
  profileinfo = { name: "Yassine Akermi", role: "Web Developer" },
  isOnline = false,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRadius: 50 }}>
        <Image
          source={{
            uri: "https://i.ibb.co/QfJ4Fcz/9f74535608abc523efe3eb37a9a30a54.jpg",
          }}
          style={{
            height: 80,
            width: 80,
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
        }}
      >
        <Text
          style={{
            ...textStyles.H2,
            color: colorStyles.Dark100A,
          }}
        >
          {profileinfo.name}
        </Text>
        <Text
          style={{
            ...textStyles.Body_16,
            color: colorStyles.Dark100A,
          }}
        >
          {profileinfo.role}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 24,
    paddingBottom: 10,
    borderColor: colorStyles.SecondaryActive,
    borderBottomWidth: 0.8,
  },
});
export default ProfilePreview;
