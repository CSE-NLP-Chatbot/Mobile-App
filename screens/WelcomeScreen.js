import {
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get("window");



const WelcomeScreen =()=> {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ marginTop: 100 }}>
        <ImageBackground
          style={{ height: height / 2.5, marginTop: 30, width: 500 }}
          resizeMode="contain"
          source={require("../assets/chatbot.png")}
        />
        <View
          style={{ paddingHorizontal: Spacing * 4, paddingTop: Spacing * 4 }}
        >
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              color: Colors.darkText,
              // fontFamily: Font["poppins-bold"],
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {" "}
            Sort out your CSE-related matters with ease{" "}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: Colors.darkText,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
              borderRadius: Spacing,
              marginRight: Spacing * 0.5,
              elevation: 10,
            }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text
              style={{
                // fontFamily: Font["poppins-bold"],
                color: Colors.onPrimary,
                fontSize: FontSize.large,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.onPrimary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
              borderRadius: Spacing,
              marginLeft: Spacing * 0.5,
              elevation:10,
            }}
            onPress={() => navigation.navigate("SignupScreen")} 
          >
            <Text
              style={{
                // fontFamily: Font["poppins-bold"],
                color: Colors.text,
                fontSize: FontSize.large,
                textAlign: "center",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
