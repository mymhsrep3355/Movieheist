import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {app,  auth , createUserWithEmailAndPassword } from "../Firebase.js";



const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if (user) {
        navigation.navigate("LoadingScreen")
      }
    })
  }, [])

  const handleSignUp = () => {
    
    createUserWithEmailAndPassword(auth, email, password).then(userdata =>{
        const user = userdata.user;
        console.log("registered mail > ", user.email);
      })
      .catch(err => alert(err.message))
  }

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
          value={email}
          onChangeText={(email) => setEmail(email)}
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
          disabled={!email && !password}
          onPress={handleSignUp}
          style={password.length < 4 ? styles.view3_btn : styles.view3_btnRed}
        >
          <Text style={styles.view3_text}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.child_view4}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Plans")}
          style={styles.view4_btn}
        >
          <Text style={styles.view3_text}>SEE PLANS</Text>
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
    flex: 0.4,
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
    flex: 0.1,
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
  view4_btn: {
    borderRadius: 5,
    width: 150,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    borderColor: "white",
    borderWidth: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
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
  child_view4:{
    flex: 0.1,
    width: 300,
  }
  // view3_text_secondary: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   color: "white",
  //   marginTop: 15,
  //   marginLeft: "auto",
  //   marginRight: "auto",
  // },
  
});
