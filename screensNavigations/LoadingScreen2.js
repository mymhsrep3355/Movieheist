import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen2 = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainPage");
    }, 1000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Text>Loading ... </Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

export default LoadingScreen2;
