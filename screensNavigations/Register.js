import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";import React from 'react'

const Register = () => {
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
          value={input}
          onChangeText={(text) => setInput(text)}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholderTextColor={"white"}
          type="email"
          placeholder="Email"
          style={styles.textInput}
        ></Input>

        <Input
          value={password}
          onChangeText={(password) => setPassword(password)}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          secureTextEntry={true}
          placeholderTextColor={"white"}
          type="password"
          placeholder="Password"
          style={styles.textInput}
        ></Input>
      </View>
      <View style={styles.child_view3}>
        <TouchableOpacity
          style={
            password.length < 4
              ? styles.view3_btn
              : styles.view3_btnRed
          }
        >
          <Text style={styles.view3_text}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>
        navigation.navigate("Register")}>
          <Text style={styles.view3_text_secondary}>
            New to Movieheist? Sign Up Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

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
