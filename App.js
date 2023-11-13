import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { StripeProvider } from '@stripe/stripe-react-native'
import Login from "./screensNavigations/Login.js";
import Register from "./screensNavigations/Register.js";
import Plans from "./screensNavigations/Plans.js";
import Home from "./screensNavigations/Home.js";
import LoadingScreen from "./screensNavigations/LoadingScreen.js";
import LoadingScreen2 from "./screensNavigations/LoadingScreen2.js";
import MainPage from "./screensNavigations/MainPage.js";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Plans"
            component={Plans}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoadingScreen2"
            component={LoadingScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
