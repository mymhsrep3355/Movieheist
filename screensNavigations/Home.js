import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    Image,
    FlatList,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { auth, signOut } from '../Firebase'
  import { useNavigation } from "@react-navigation/native";
//   import { MovieItems } from "../Context";
  const Home = () => {
    const navigation = useNavigation();
    const {profile,setProfile} = useState('');
    console.log("selected profile: ",profile)
  const profiles = [
      {
        id: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU",
        name: "Hamza",
      },
      {
        id: "1",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU",
        name: "XYZ",
      },
      {
        id: "2",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU",
        name: "YZX",
      },
      {
        id: "3",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU",
        name: "XXY",
      },
    ];
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        {/* <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "500",
              marginLeft: 6,
            }}
          >
            Profiles and more
          </Text>
        </Pressable> */}
  
        <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.logo}
          source={require("../assets/Movieheist.png")}
        />
        </View>
  
        <View style={{marginTop:50,alignItems:"center"}}>
          <Text style={{color:"gray",fontSize:16,fontWeight:"600"}}>Who's Watching?</Text>
  
          <FlatList numColumns={2} data={profiles} renderItem={({item}) => (
            <Pressable onPress={() => {
              setProfile(item);
              navigation.navigate("Loading");
            }}
             style={{marginHorizontal:10,padding:20,marginTop:10}}>
              <Image style={{width:110,height:110,borderRadius:7,resizeMode:"contain"}} source={{uri:item.image}}/>
              <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"500",marginTop:10}}>{item.name}</Text>
            </Pressable>
          )}/>
        </View>
  
        <Pressable onPress={handleSignOut}>
          <Text style={{fontSize:18,textAlign:"center",color:"gray",marginTop:15}}>Sign Out</Text>
        </Pressable>
      </SafeAreaView>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 200,
        marginTop: 70,
      },
  });

// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useNavigation } from "@react-navigation/native";
// import { auth, signOut } from '../Firebase'

// const Home = () => {
//     const navigation = useNavigation()
//     const handleSignOut = () => {
//         auth
//           .signOut()
//           .then(() => {
//             navigation.replace("Login")
//           })
//           .catch(error => alert(error.message))
//       }
//       return (
//         <View style={styles.container}>
//           <Text>Email: {auth.currentUser?.email}</Text>
//           <TouchableOpacity
//             onPress={handleSignOut}
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>Sign out</Text>
//           </TouchableOpacity>
//         </View>
//       )
//     }
    
//     export default Home
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//       },
//        button: {
//         backgroundColor: '#0782F9',
//         width: '60%',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginTop: 40,
//       },
//       buttonText: {
//         color: 'white',
//         fontWeight: '700',
//         fontSize: 16,
//       },
//     })