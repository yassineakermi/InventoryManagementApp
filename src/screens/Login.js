import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { textStyles, colorStyles } from "../utils/GlobalStyles";

const Login = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [passwordFocused, setPasswordFocused] = useState(false);
  let passwordElement = useRef();
  const focusInput = () => {
    passwordElement.current.focus();
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-around",
        height: "100%",
      }}
    >
      <View style={styles.container}>
        <Text style={[styles.boldHeader]}>Lets's sign you in</Text>
        <Text style={[styles.smallHeader]}>
          Wellcome back to your workspace!
        </Text>
        <View style={styles.inputView}>
          <Image
            style={{ marginRight: 10 }}
            source={require("../../assets/icons/Profile.png")}
          />
          <TextInput
            style={textStyles.H3}
            placeholder="Your Email Here"
            placeholderTextColor={colorStyles.Dark100A}
            onEndEditing={(_) => {
              focusInput();
            }}
          />
        </View>
        <View
          style={[
            styles.inputView,
            { marginTop: 25, justifyContent: "space-between" },
          ]}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{ marginRight: 10 }}
              source={require("../../assets/icons/Lock.png")}
            />
            <TextInput
              style={textStyles.H3}
              placeholder="Your Password Here"
              placeholderTextColor={colorStyles.Dark100A}
              secureTextEntry={passwordHidden}
              focusable={passwordFocused}
              ref={passwordElement}
            />
          </View>
          <TouchableOpacity
            onPress={(_) => {
              setPasswordHidden(!passwordHidden);
            }}
          >
            {passwordHidden ? (
              <Image source={require("../../assets/icons/Show.png")} />
            ) : (
              <Image source={require("../../assets/icons/Hide.png")} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.signin_btn}>
        <Text
          style={[
            textStyles.H3,
            { color: colorStyles.White, alignSelf: "center" },
          ]}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signin_btn: {
    paddingVertical: 16,
    backgroundColor: colorStyles.StrongBlue,
    borderRadius: 12,
    marginHorizontal: 34,
  },
  container: {
    marginHorizontal: 24,
    marginTop: 50,
  },
  boldHeader: {
    color: colorStyles.Dark100A,
    marginVertical: 10,
    fontSize: 32,
    fontFamily: "poppins-semibold",
  },
  smallHeader: {
    fontSize: 32,
    fontFamily: "poppins-light",
    color: colorStyles.Dark60,
  },

  inputView: {
    marginTop: 45,
    borderColor: colorStyles.SecondaryActive,
    borderRadius: 12,
    paddingVertical: 16,
    paddingLeft: 20,
    paddingRight: 16,
    borderWidth: 1.5,
    display: "flex",
    flexDirection: "row",
  },
});
export default Login;