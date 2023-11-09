import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import app_navigation_stack from "./app_navigation_stack";
export default function App() {

  <app_navigation_stack>
    <StatusBar style="light"></StatusBar>
  </app_navigation_stack>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
