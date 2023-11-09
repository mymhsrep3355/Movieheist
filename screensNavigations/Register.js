import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [username, setUserName] = useState('');
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.backgroundImg}
        source={require("../assets/RegisterBanner.jpg")}
      />
      <View style={styles.child_view1}>
        <Image
          style={styles.logo}
          source={require("../assets/Movieheist.png")}
        />
      </View>

      <View style={styles.child_view2}>
        <Input
          value={username}
          onChangeText={(name) => setUserName(name)}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholderTextColor={"red"}
          type="text"
          placeholder="Name"
          style={styles.textInput}
        ></Input>

        <Input
          value={input}
          onChangeText={(text) => setInput(text)}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholderTextColor={"red"}
          type="email"
          placeholder="Email"
          style={styles.textInput}
        ></Input>

        <Input
          value={password}
          onChangeText={(password) => setPassword(password)}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          secureTextEntry={true}
          placeholderTextColor={"red"}
          type="password"
          placeholder="Password"
          style={styles.textInput}
        ></Input>
      </View>
      <View style={styles.child_view3}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Plans", {
            username: username,
            email: input,
            password: password,
          })}
          style={password.length < 4 ? styles.view3_btn : styles.view3_btnRed}
        >
          <Text style={styles.view3_text}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "column",
  },
  child_view1: {
    flex: 0.3,
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 200,
    marginTop: 70,
    objectFit: "fill",
  },
  backgroundImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  child_view2: {
    flex: 0.5,
    marginTop: 110,
    width: 300,
    alignItems: "center",
  },
  textInput: {
    width: 50,
    marginTop: 7,
    color: "white",
    padding: 10,
    backgroundColor: "black",
    borderRadius: 4,
  },
  child_view3: {
    flex: 0.2,
    width: 300,
  },
  view3_btn: {
    borderRadius: 5,
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    // borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 50,
  },
  view3_btnRed: {
    borderRadius: 5,
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    // borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: 50,
  },
  view3_text: {
    color: "white",
  },
  view3_text_secondary: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
