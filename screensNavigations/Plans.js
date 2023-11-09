import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import app from "../Firebase.js";
import { getDatabase, ref, onValue } from "firebase/database";
import { ListItem } from "react-native-elements";

const Plans = () => {
  const [plansData, setPlansData] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const dbRef = ref(database, "Plans");

    // Set up a listener to fetch data when it changes
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        // Convert the snapshot's value to an array of plans
        const plansArray = Object.values(snapshot.val());
        setPlansData(plansArray);
      }
    });
  }, []);

  return (
    <SafeAreaView>
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

        <View style={styles.planCards}/>

          {plansData.map((item, index) => (
            <TouchableOpacity style={styles.cardsContainer} key={index}>
              <View style={styles.cardsContainer_view}>
                <Text style={styles.cardsContainer_text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}

      </View>
    </SafeAreaView>
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
  planCards:{
    marginTop:25,
  },
  cardsContainer:{
    height:140,
    borderRadius:7,
    borderColor:'red',
    padding:10,
    borderWidth:1,
    marginBottom:8,
  },
  cardsContainer_view:{
    backgroundColor:'#E50914',
    padding:10,
    width:120,
    borderRadius:7,
  },
  cardsContainer_text:{
    textAlign:'center',
    color:'white',
    fontSize:15,
    fontWeight:'400'
  }
});

// import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { AntDesign } from '@expo/vector-icons';
// import firebase from '../Firebase.js';
// import { getDatabase, ref, onValue } from 'firebase/database';

// const Plans = () => {
//   const [plansData, setPlansData] = useState([]);

//   useEffect(() => {
//     const database = getDatabase();
//     const dbRef = ref(database, 'Plans');

//     // Set up a listener to fetch data when it changes
//     onValue(dbRef, (snapshot) => {
//       if (snapshot.exists()) {
//         // Convert the snapshot's value to an array of plans
//         const plansArray = Object.values(snapshot.val());
//         setPlansData(plansArray);
//       }
//     });
//   }, []);

//   return (
//     <SafeAreaView>
//       <View style={styles.bigContainer}>
//         <Text style={styles.bigContainer_text}>Choose your plan that is good for you!</Text>
//         <FlatList
//           data={plansData}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.view2}>
//               <AntDesign name='check' size={23} color={"red"} />
//               <Text>{item.name}</Text>
//               <Text>Price: {item.price}</Text>
//               <Text>Video Quality: {item.videoQuality}</Text>
//               <Text>Resolution: {item.resolution}</Text>
//               {/* You can iterate over 'devices' array here if needed */}
//             </View>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Plans;

// const styles = StyleSheet.create({
//   bigContainer: {
//     padding: 20,
//     marginTop: 25,
//   },
//   bigContainer_text: {
//     fontSize: 18,
//     fontWeight: "600",
//     alignItems: 'center',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
//   view2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 3,
//     justifyContent: 'center',
//     marginRight: 'auto',
//     marginLeft: 'auto',
//     marginTop: 3,
//   },
// });
