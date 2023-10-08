import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    if (
      username.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ padding: Spacing * 2, marginTop: 50 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.darkText,
              marginVertical: Spacing * 3,
              fontWeight: "bold",
            }}
          >
            Create Account
          </Text>
          <Text
            style={{
              //   fontFamily: Font["poppins-semibold"],
              color: Colors.text,
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Create an account so you can sort out your CSE-related matters with
            ease.
          </Text>
        </View>
        <View style={{ marginVertical: Spacing * 3, marginTop: 80 }}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.darkText}
            style={{
              fontSize: FontSize.medium,
              padding: Spacing * 2,
              backgroundColor: Colors.lightPrimary,
              borderRadius: Spacing,
              marginVertical: Spacing,
            }}
            onChangeText={(text) => {
              setUsername(text);
              validateForm();
            }}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.darkText}
            style={{
              fontSize: FontSize.medium,
              padding: Spacing * 2,
              backgroundColor: Colors.lightPrimary,
              borderRadius: Spacing,
              marginVertical: Spacing,
            }}
            onChangeText={(text) => {
              setEmail(text);
              validateForm();
            }}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.darkText}
            secureTextEntry={true}
            style={{
              fontSize: FontSize.medium,
              padding: Spacing * 2,
              backgroundColor: Colors.lightPrimary,
              borderRadius: Spacing,
              marginVertical: Spacing,
            }}
            onChangeText={(text) => {
              setPassword(text);
              validateForm();
            }}
          />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={Colors.darkText}
            secureTextEntry={true}
            style={{
              fontSize: FontSize.medium,
              padding: Spacing * 2,
              backgroundColor: Colors.lightPrimary,
              borderRadius: Spacing,
              marginVertical: Spacing,
            }}
            onChangeText={(text) => {
              setConfirmPassword(text);
              validateForm();
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: isFormValid ? Colors.darkText : Colors.gray,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            elevation: 10,
          }}
          onPress={() => {
            if (isFormValid) {
              navigation.navigate("AdminDashboard");
            }
          }}
          disabled={!isFormValid}
        >
          <Text
            style={{
              color: isFormValid? Colors.onPrimary: Colors.text,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: Spacing,
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text
            style={{
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
              fontWeight: "bold",
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default SignupScreen;
