import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import { colorStyles, textStyles } from "../utils/GlobalStyles";

export default function DiscussionBody({ navigation, profileinfo }) {
  const [chatUser] = useState({
    name: "Robert Henry",
    profile_image: "https://randomuser.me/api/portraits/men/0.jpg",
    last_seen: "online",
  });

  const [currentUser] = useState({
    name: profileinfo.name,
  });

  const [messages, setMessages] = useState([
    {
      sender: "Yassine Akermi",
      message: "Hello, some orders have not been shipped yet?",
      time: "6:02 PM",
    },
    {
      sender: "Robert Henry",
      message: "Good morning,\n Yes, product #10096325 is out of stock.",
      time: "6:02 PM",
    },
    {
      sender: "Yassine Akermi",
      message: `Really 😮 !!!`,
      time: "6:02 PM",
    },
    {
      sender: "Robert Henry",
      message: `Unfortunately 🙁`,
      time: "6:03 PM",
    },
    {
      sender: "Yassine Akermi",
      message: `I forgot to check for out of stock products in the app. Damn it!!`,
      time: "6:03 PM",
    },
    {
      sender: "Yassine Akermi",
      message: `I have requested for re-stock of a couple of products from the supplier, hopefully they will reach us in half a day.`,
      time: "6:03 PM",
    },
    {
      sender: "Robert Henry",
      message: `Great! I'll make sure to ship the orders as soon as the products arrive.`,
      time: "6:04 PM",
    },
    {
      sender: "Yassine Akermi",
      message: `Thanks. Do your best.`,
      time: "6:05 PM",
    },
    {
      sender: "Robert Henry",
      message: `Sure! Thank you 😊`,
      time: "6:05 PM",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === "") {
      return setInputMessage("");
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage("");
  }

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome name="angle-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Image
            style={styles.userProfileImage}
            source={{ uri: chatUser.profile_image }}
          />
          <View
            style={{
              paddingLeft: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 18 }}>
              {chatUser.name}
            </Text>
            <Text style={{ color: "#fff", fontWeight: "300" }}>
              {chatUser.last_seen}
            </Text>
          </View>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingRight: 10 }}
          onPress={() => {
            Alert.alert("Audio Call", "Audio Call Button Pressed");
          }}
        >
          <Ionicons name="call" size={28} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: colorStyles.White }}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <View style={{ marginTop: 6 }}>
                <View
                  style={{
                    maxWidth: Dimensions.get("screen").width * 0.8,
                    backgroundColor:
                      item.sender === currentUser.name
                        ? colorStyles.StrongBlue
                        : colorStyles.ExtraWhite,
                    alignSelf:
                      item.sender === currentUser.name
                        ? "flex-end"
                        : "flex-start",
                    marginHorizontal: 12,
                    paddingVertical: 10,
                    padding: 10,
                    borderRadius: 12,
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 12 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 4 : 12,
                    borderTopLeftRadius:
                      item.sender === currentUser.name ? 12 : 4,
                  }}
                >
                  <Text
                    style={{
                      color:
                        item.sender === currentUser.name
                          ? colorStyles.White
                          : colorStyles.Dark100A,
                      fontSize: 16,
                    }}
                  >
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color:
                        item.sender === currentUser.name
                          ? colorStyles.StrongBlue60
                          : colorStyles.Dark60,
                      fontSize: 14,
                      alignSelf: "flex-end",
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View
          style={{
            paddingVertical: 10,
            backgroundColor: colorStyles.ExtraWhite,
          }}
        >
          <View style={{ ...styles.messageInputView }}>
            <TextInput
              defaultValue={inputMessage}
              style={{
                ...styles.messageInput,
                ...textStyles.Body_16,
                color: colorStyles.Dark100A,
              }}
              placeholderTextColor={colorStyles.Dark100A}
              placeholder="Message"
              onChangeText={(text) => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}
            >
              <Feather name="send" size={24} color={colorStyles.White} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userProfileImage: { height: "100%", aspectRatio: 1, borderRadius: 100 },
  container: {
    flex: 1,
    backgroundColor: "#f2f2ff",
  },
  messageInputView: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 12,
    borderRadius: 4,
  },
  messageInput: {
    flex: 1,
    padding: 8,
    paddingLeft: 16,
    backgroundColor: colorStyles.White,
    borderRadius: 48,
  },
  messageSendView: {
    padding: 10,
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: colorStyles.StrongBlue,
  },
});
