import { AdminDashboard, LoginScreen, WelcomeScreen,SignupScreen } from "./screens";
import { Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppStack () {
  return ( 
    <NavigationContainer>
     <Stack.Navigator 
      // screenOptions={{
      //   headerStyle:{
      //     backgroundColor:"#B35B51"
      //   },
      //   headerTitle: () => (
      //     <View style={{ flexDirection: "row", alignItems: "center",justifyContent: "space-between"}}>
      //       <Image
      //         source={{
      //           uri:
      //             "https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png",
      //         }}
      //         style={{ width: 30, height: 30, marginRight: 250 }}
      //       />
      //       <Text style={{ fontSize: 18, color: "white" }}>Username</Text>
      //     </View>
      //   ),
      // }}
     >
         <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{ title: "Admin Dashboard" }} 
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
