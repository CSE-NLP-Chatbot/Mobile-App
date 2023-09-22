import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AdminDashboard, UpdateDetails } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator(); // createBottomTabNavigator is a function that returns a component
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    background: "#fff",
    borderRadius: 15,
    height: 60,
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name=" "
          component={AdminDashboard}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ color: "#16247d", fontSize: 12 }}>
                    Dashboard
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="  "
          component={UpdateDetails}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialCommunityIcons
                    name="account-details"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ color: "#16247d", fontSize: 12 }}>
                    Update Details
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
