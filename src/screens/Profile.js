import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from "react-native";
import React, { useState, useRef } from "react";
import { textStyles, colorStyles } from "../utils/GlobalStyles";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import UpdateProfileBottomSheet from "../components/UpdateProfileBottomSheet";
import BottomNavigation from "../components/BottomNavigation";
import BottomSheet from "../components/BottomSheet";
import { PortalProvider } from "@gorhom/portal";
const Profile = ({ navigation, route }) => {
  const [isAddEnabled, setIsAddEnabled] = useState(false);
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const updateModalRef = useRef(null);
  const OpenModal = (ref) => {
    ref.current?.open();
  };

  const CloseModal = (ref) => {
    ref.current?.close();
  };

  const rightButtons = [
    <TouchableOpacity onPress={(_) => OpenModal(updateModalRef)}>
      <Ionicons
        name="ellipsis-horizontal-circle-outline"
        size={24}
        color={colorStyles.StrongBlue}
      />
    </TouchableOpacity>,
  ];

  const leftButtons = [
    <TouchableOpacity onPress={(_) => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color={colorStyles.StrongBlue} />
    </TouchableOpacity>,
  ];

  return (
    <PortalProvider>
      <SafeAreaView style={styles.container}>
        <Header
          title={"User Details"}
          rightButtons={rightButtons}
          leftButtons={leftButtons}
          titleCentered={true}
        />

        <View style={{ borderRadius: 50, marginTop: "5%" }}>
          <Image
            source={{
              uri: "https://i.ibb.co/QfJ4Fcz/9f74535608abc523efe3eb37a9a30a54.jpg",
            }}
            style={{
              height: 150,
              width: 150,
              borderRadius: 500,
              borderWidth: 3,
              borderColor: route.params.isOnline
                ? "#0fcc45"
                : colorStyles.StrongBlue10,
              alignSelf: "center",
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          <Text
            style={{
              ...textStyles.H1,
              color: colorStyles.Dark100A,
            }}
          >
            {route.params.profileinfo.name}
          </Text>
          <Text
            style={{
              ...textStyles.Body_16,
              color: colorStyles.Dark60,
              marginTop: "0.7%",
            }}
          >
            {route.params.profileinfo.role}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 24,
            justifyContent: "space-between",
            marginTop: "3%",
            borderBottomWidth: 0.5,
            borderColor: colorStyles.SecondaryActive,
            paddingBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.signin_btn,
              backgroundColor: colorStyles.StrongBlue,
              paddingHorizontal: 50,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                textStyles.H3,
                { color: colorStyles.White, alignSelf: "center" },
              ]}
            >
              Give a call
            </Text>
            <Ionicons
              name="call-outline"
              size={18}
              color="black"
              style={{ color: colorStyles.White, marginLeft: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.signin_btn,
              backgroundColor: colorStyles.ExtraWhite,
              paddingHorizontal: 35,
            }}
          >
            <Text
              style={[
                textStyles.H3,
                { color: colorStyles.StrongBlue, alignSelf: "center" },
              ]}
            >
              Chat
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 24, marginTop: "4%" }}>
          <Text style={{ ...textStyles.Uppercase, color: colorStyles.Dark60 }}>
            user details
          </Text>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: "3%" }}
          >
            <Ionicons
              name="call-outline"
              size={28}
              color={colorStyles.StrongBlue}
              style={{ marginRight: 15 }}
            />
            <Text
              style={{
                ...textStyles.Body_16,
                color: colorStyles.Dark100A,
                alignSelf: "center",
              }}
            >
              +380 96 517 08 18
            </Text>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", marginTop: "3%" }}
          >
            <Ionicons
              name="ios-mail-outline"
              size={28}
              color={colorStyles.StrongBlue}
              style={{ marginRight: 15 }}
            />
            <Text
              style={{
                ...textStyles.Body_16,
                color: colorStyles.Dark100A,
                alignSelf: "center",
              }}
            >
              yassineakermiy@gmail.com
            </Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 24, marginTop: "4%" }}>
          <Text style={{ ...textStyles.Uppercase, color: colorStyles.Dark60 }}>
            user permissions
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Switch
              trackColor={{
                false: colorStyles.Dark0,
                true: colorStyles.StrongBlue,
              }}
              thumbColor={isAddEnabled ? colorStyles.ExtraWhite : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(_) => setIsAddEnabled(!isAddEnabled)}
              value={isAddEnabled}
            />
            <Text
              style={{
                ...textStyles.Body_16,
                color: colorStyles.Dark100A,
                alignSelf: "center",
              }}
            >
              Add Products
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Switch
              trackColor={{
                false: colorStyles.Dark0,
                true: colorStyles.StrongBlue,
              }}
              thumbColor={isEditEnabled ? colorStyles.ExtraWhite : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(_) => setIsEditEnabled(!isEditEnabled)}
              value={isEditEnabled}
            />
            <Text
              style={{
                ...textStyles.Body_16,
                color: colorStyles.Dark100A,
                alignSelf: "center",
              }}
            >
              Update Products
            </Text>
          </View>
        </View>
        <BottomNavigation
          navigation={navigation}
          route={route}
          style={{ position: "absolute", bottom: 0, width: "100%" }}
        />
        <BottomSheet modalRef={updateModalRef} height={500}>
          <UpdateProfileBottomSheet
            email="yassineakermiy@gmail.com"
            name={route.params.profileinfo.name}
            phone="+380965170818"
            role={route.params.profileinfo.role}
            closeModal={(_) => CloseModal(updateModalRef)}
          />
        </BottomSheet>
      </SafeAreaView>
    </PortalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colorStyles.White,
    position: "relative",
  },
  signin_btn: {
    paddingVertical: 16,
    borderRadius: 12,
    paddingHorizontal: 19,
  },
});

export default Profile;
