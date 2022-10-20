import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatPreview from "./ChatPreview";

const ChatsList = ({
  data,
  navigation = null,
  onPress = (_) => {},
  style = {},
  route,
}) => {
  const itemRenderer = ({ item, index }) => {
    return (
      <ChatPreview
        lastMessage={item.lastMessage}
        date={item.date}
        profileinfo={item.profileinfo}
        isOnline={index % 2 == 0}
        navigation={navigation}
        route={route}
        onPress={onPress}
      />
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={itemRenderer}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index}
      style={{
        margintop: 10,
        flexGrow: 0,
        ...style,
      }}
    />
  );
};

export default ChatsList;
