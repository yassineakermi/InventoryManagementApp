import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useState, useRef } from "react";
import InputField from "./InputField";
import { textStyles, colorStyles } from "../utils/GlobalStyles";

const UpdateProfileBottomSheet = ({
  closeModal = (_) => {},
  name = "",
  role = "",
  email = "",
  phone = "",
}) => {
  const [memberName, setMemberName] = useState(name);
  const handleMemberNameChange = (str = "") => {
    setMemberName(str);
  };
  const [memberEmail, setMemberEmail] = useState(email);
  const emailRef = useRef(null);
  const handleMemberEmailChange = (str = "") => {
    setMemberEmail(str);
  };
  const [memberPhone, setMemberPhone] = useState(phone);
  const phoneRef = useRef(null);
  const handleMemberPhoneChange = (str = "") => {
    setMemberPhone(str);
  };
  const [memberRole, setMemberRole] = useState(role);
  const roleRef = useRef(null);
  const handleMemberRoleChange = (str = "") => {
    setMemberRole(str);
  };
  return (
    <View
      style={{
        backgroundColor: colorStyles.ExtraWhite,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex: 1,
        padding: 24,
        position: "relative",
      }}
    >
      <Text style={{ ...textStyles.H1, marginBottom: 10 }}>
        Update Team Member
      </Text>
      <InputField
        placeholder="Name"
        onTextChange={handleMemberNameChange}
        textState={memberName}
        style={{ marginBottom: 10 }}
        next={emailRef}
      />
      <InputField
        placeholder="Email"
        onTextChange={handleMemberEmailChange}
        textState={memberEmail}
        style={{ marginBottom: 10 }}
        next={phoneRef}
        ref_={emailRef}
      />
      <InputField
        placeholder="Phone number"
        onTextChange={handleMemberPhoneChange}
        textState={memberPhone}
        style={{ marginBottom: 10 }}
        next={roleRef}
        ref_={phoneRef}
      />
      <InputField
        placeholder="Role"
        onTextChange={handleMemberRoleChange}
        textState={memberRole}
        style={{ marginBottom: 10 }}
        ref_={roleRef}
      />
      <TouchableOpacity style={styles.signin_btn} onPress={closeModal}>
        <Text
          style={[
            textStyles.H3,
            { color: colorStyles.White, alignSelf: "center" },
          ]}
        >
          Update Member
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sizeInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  signin_btn: {
    paddingVertical: 16,
    backgroundColor: colorStyles.StrongBlue,
    borderRadius: 12,
    marginHorizontal: 34,
    position: "absolute",
    bottom: 30,
    width: "60%",
    alignSelf: "center",
  },
});
export default UpdateProfileBottomSheet;
