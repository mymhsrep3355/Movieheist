import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { getDatabase, ref, onValue } from "firebase/database";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {app,  auth } from "../Firebase.js";
import { useRoute } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";


const Plans = () => {
  const [selected, setselected] = useState([]);
  const [price, setprice] = useState();
  const [plansData, setPlansData] = useState([]);
  // const route = useRoute();
  // const email = route.params.email;
  // const password = route.params.password;
  console.log(selected);
  console.log(price);
  const navigation = useNavigation();
  
  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database, "Plans");

    // Set up a listener to fetch data when it changes
    onValue(dbRef, (data) => {
      if (data.exists()) {

        const plansArray = Object.values(data.val());
        setPlansData(plansArray);
      }
    });
  }, []);


  return (
    <>
      <ScrollView style={{ marginTop: 10 }}>
        <View style={styles.bigContainer}>
          <Text style={styles.bigContainer_text}>
            Choose your plan that is good for you!
          </Text>
          <View style={styles.view2}>
            <AntDesign name="check" size={23} color={"red"} />
            <Text>Access to All Features, Recommendation</Text>
          </View>
          <View style={styles.view2}>
            <AntDesign name="check" size={23} color={"red"} />
            <Text>Cancel Subscription Anytime</Text>
          </View>
          <View style={styles.view2}>
            <AntDesign name="check" size={23} color={"red"} />
            <Text>Watch All you want Ad Free</Text>
          </View>

          <View style={styles.planCards} />

          {plansData.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setselected(item.name);
                setprice(item.price);
                //adding style
              }}
              style={
                selected.includes(item.name)
                  ? {
                      height: 180,
                      borderRadius: 7,
                      borderColor: "green",
                      padding: 10,
                      borderWidth: 2.5,
                      marginBottom: 8,
                    }
                  : {
                      height: 140,
                      borderRadius: 7,
                      borderColor: "red",
                      padding: 10,
                      borderWidth: 0.5,
                      marginBottom: 8,
                    }
              }
              key={index}
            >
              <View style={styles.innerContainer}>
                <View style={styles.cardsContainer_view}>
                  <Text style={styles.cardsContainer_text}>{item.name}</Text>
                </View>

                <Text style={styles.innerContainer_Price}>
                  Price: PKR {item.price}
                </Text>
              </View>
              <View style={styles.innerContainer2}>
                <View>
                  <Text style={styles.innerContainer2_text1}>
                    Video Quality: {item.videoQuality}
                  </Text>
                  <Text style={styles.innerContainer2_text2}>
                    Resolution: {item.resolution}
                  </Text>
                </View>
                <MaterialIcons name="local-movies" size={24} color="black" />
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>Devices applicable: </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.devices.map((device, index) => (
                    <Entypo
                      key={index}
                      name={device.name}
                      size={25}
                      color="red"
                      style={{ marginLeft: 5 }} // Adjust the styling as needed
                    />
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {selected.length > 0 ? (
        <TouchableOpacity
          style={styles.bottomBTN}
        >
          <View>
            <Text style={styles.bottomBTN_text}>Selected Plan: {selected}</Text>
          </View>

          <TouchableOpacity>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: "white" }}>
              Pay Amount: PKR{price}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {
            navigation.navigate("Login")
          }}>
            <View>
              <Text style={styles.bottomBTN_textlogin}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      ) : null}
    </> // to render a single compoennt, empty fragment
  );
};

export default Plans;

const styles = StyleSheet.create({
  bigContainer: {
    padding: 20,
    marginTop: 25,
  },
  bigContainer_text: {
    fontSize: 18,
    fontWeight: "600",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 3,
  },
  planCards: {
    marginTop: 25,
  },
  // cardsContainer: {
  //   height: 140,
  //   borderRadius: 7,
  //   borderColor: "red",
  //   padding: 10,
  //   borderWidth: 1,
  //   marginBottom: 8,
  // },
  cardsContainer_view: {
    backgroundColor: "#E50914",
    padding: 10,
    width: 120,
    borderRadius: 7,
  },
  cardsContainer_text: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "400",
  },
  innerContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  innerContainer_Price: {
    fontWeight: "bold",
  },
  innerContainer2: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerContainer2_text1: {
    fontWeight: "normal",
    color: "gray",
  },
  innerContainer2_text2: {
    color: "black",
    fontWeight: "500",
  },
  bottomBTN: {
    backgroundColor: "red",
    padding: 15,
    marginBottom: 9,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 50,
  },
  bottomBTN_text: {
    color: "white",
    fontSize: 10,
    fontWeight: "500",
  },
  bottomBTN_textlogin: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
