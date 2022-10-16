import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { PortalProvider } from "@gorhom/portal";
import { colorStyles } from "../utils/GlobalStyles";
import BottomNavigation from "../components/BottomNavigation";
import BottomSheet from "../components/BottomSheet";
import MembersHeader from "../components/Header";
import { Feather } from "@expo/vector-icons";
import AddProductBottomSheet from "../components/AddProductBottomSheet";
import ProfilesPreviewList from "../components/ProfilesPreviewList";

const Members = ({ navigation, route }) => {
  const addModalRef = useRef(null);
  const OpenModal = (ref) => {
    ref.current?.open();
  };

  const CloseModal = (ref) => {
    ref.current?.close();
  };

  const rightButtons = [
    <TouchableOpacity onPress={(_) => OpenModal(addModalRef)}>
      <Feather name="plus-square" size={24} color={colorStyles.StrongBlue} />
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
        <MembersHeader title="Team Members" rightButtons={rightButtons} />
        <BottomSheet modalRef={addModalRef} height={500}>
          <AddProductBottomSheet closeModal={() => CloseModal(addModalRef)} />
        </BottomSheet>
        <ProfilesPreviewList data={members} />
      </SafeAreaView>
    </PortalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colorStyles.White,
  },
});

export default Members;
