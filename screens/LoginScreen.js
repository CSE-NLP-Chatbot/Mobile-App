import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
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
            Login here
          </Text>
          <Text
            style={{
              //   fontFamily: Font["poppins-semibold"],
              color: Colors.text,
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back again
          </Text>
        </View>
        <View style={{ marginVertical: Spacing * 3, marginTop: 80 }}>
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
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: FontSize.small,
              color: Colors.text,
              alignSelf: "flex-end",
              fontWeight: "bold",
            }}
          >
            Forget your password ?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.darkText,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            elevation: 10,
          }}
          onPress={() => navigation.navigate("AdminDashboard")}
        >
          <Text
            style={{
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: Spacing,
          }}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text
            style={{
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
              fontWeight: "bold",
            }}
          >
            Create a new account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
