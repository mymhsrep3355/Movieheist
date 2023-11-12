import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { auth, signInWithEmailAndPassword } from "../Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("LoadingScreen");
      }
    });
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        setError(null); // Clear any previous errors
      })
      .catch((error) => setError("Invalid credentials")); // Set the error message
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.child_view1}>
        <Image
          style={styles.logo}
          source={require("../assets/Movieheist.png")}
        />
      </View>

      <View style={styles.child_view2}>
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholderTextColor={"white"}
          type="email"
          placeholder="Email"
          style={styles.textInput}
        ></Input>

        <Input
          value={password}
          onChangeText={(password) => setPassword(password)}
          inputContainerStyle={{
            borderTopWidth: 1,
            borderBottomWidth: 2,
            borderTopColor: error ? "red" : "gray",
            borderBottomColor: error ? "red" : "gray",
             // Set border color based on error
          }}
          secureTextEntry={true}
          placeholderTextColor={"white"}
          type="password"
          placeholder="Password"
          style={styles.textInput}
        ></Input>

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <View style={styles.child_view3}>
        <TouchableOpacity
          onPress={handleLogin}
          style={
            password.length < 4
              ? styles.view3_btn
              : styles.view3_btnRed
          }
        >
          <Text style={styles.view3_text}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.view3_text_secondary}>
            New to Movieheist? Sign Up Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginTop: 10,
  },
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
    height: 100,
    width: 200,
    marginTop: 70,
  },
  child_view2: {
    flex: 0.4,
    marginTop: 150,
    width: 300,
    alignItems: "center",
  },
  textInput: {
    width: 50,
    marginTop: 7,
    color: "white",
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 4,
  },
  child_view3: {
    flex: 0.3,
    width: 300,
  },
  view3_btn: {
    borderRadius: 5,
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    borderColor: "white",
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
    borderColor: "black",
    borderWidth: 2,
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
