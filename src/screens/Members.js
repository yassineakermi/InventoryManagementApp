import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useRef, useContext } from "react";
import { PortalProvider } from "@gorhom/portal";
import { colorStyles } from "../utils/GlobalStyles";
import BottomNavigation from "../components/BottomNavigation";
import BottomSheet from "../components/BottomSheet";
import Header from "../components/Header";
import { Feather, Ionicons } from "@expo/vector-icons";
import AddMemberBottomSheet from "../components/AddMemberBottomSheet";
import ProfilesPreviewList from "../components/ProfilesPreviewList";
import AppContext from "../context/AppContext";

const Members = ({ navigation, route }) => {
  const addModalRef = useRef(null);
  const context = useContext(AppContext);

  const OpenModal = (ref) => {
    ref.current?.open();
  };

  const CloseModal = (ref) => {
    ref.current?.close();
  };

  const windowHeight = Dimensions.get("window").height;

  const rightButtons = [
    <TouchableOpacity onPress={(_) => OpenModal(addModalRef)}>
      <Feather name="plus-square" size={24} color={colorStyles.StrongBlue} />
    </TouchableOpacity>,
  ];

  const leftButtons = [
    <TouchableOpacity onPress={() => context?.drawer?.current?.openDrawer()}>
      <Feather name="menu" size={24} color={colorStyles.StrongBlue} />
    </TouchableOpacity>,
  ];

  const members = [
    { name: "Yassine Akermi", role: "Web developer" },
    { name: "David Guetta", role: "Role Model" },
    { name: "Amy Winehouse", role: "Accountant" },
    { name: "Hayley Reinhart", role: "Old Fashionist" },
    { name: "Yassine Akermi", role: "Web developer" },
    { name: "David Guetta", role: "Role Model" },
    { name: "Amy Winehouse", role: "Accountant" },
    { name: "Hayley Reinhart", role: "Old Fashionist" },
  ];

  return (
    <PortalProvider>
      <SafeAreaView style={styles.container}>
        <Header
          title="Team Members"
          rightButtons={rightButtons}
          leftButtons={leftButtons}
        />
        <ProfilesPreviewList
          data={members}
          navigation={navigation}
          style={{ height: windowHeight - 140 }}
        />
        <BottomNavigation
          navigation={navigation}
          route={route}
          style={{ position: "absolute", bottom: 0, width: "100%" }}
        />
        <BottomSheet modalRef={addModalRef} height={500}>
          <AddMemberBottomSheet closeModal={() => CloseModal(addModalRef)} />
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
    display: "flex",
  },
});

export default Members;
