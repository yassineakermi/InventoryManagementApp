import { View, Text, FlatList } from "react-native";
import React from "react";
import ProfilePreview from "./ProfilePreview";
const ProfilesPreviewList = ({ data }) => {
  const itemRenderer = ({ item, index }) => {
    return <ProfilePreview profileinfo={item} isOnline={index % 2 == 0} />;
  };
  return (
    <FlatList
      data={data}
      renderItem={itemRenderer}
      showsVerticalScrollIndicator={false}
      keyExtractor={(index) => index}
      style={{
        margintop: 10,
        flexGrow: 0,
      }}
    />
  );
};

export default ProfilesPreviewList;
