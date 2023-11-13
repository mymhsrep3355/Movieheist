import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    Image,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  // import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { auth, signOut } from '../Firebase'
  // import { useContext } from "react";
  import { useNavigation } from "@react-navigation/native";
  // import { MovieItems } from "../Context.js";
  const Home = () => {
    const navigation = useNavigation();
    // const {profile,setProfile} = useContext(MovieItems);
    // console.log("selected profile: ",profile)
  const profiles = [
      {
        id: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU",
        name: "YZY",
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

        <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.logo}
          source={require("../assets/Movieheist.png")}
        />
        </View>
  
        <View style={{marginTop:50,alignItems:"center"}}>
        <Text style={{color:"gray",fontSize:16,fontWeight:"600"}}>Current User</Text>
          <Text style={{color:"gray",fontSize:16,fontWeight:"600"}}>{auth.currentUser?.email}</Text>
  
          <FlatList numColumns={2} data={profiles} renderItem={({item}) => (
            <Pressable onPress={() => { 
              // setProfile(item) 
              navigation.navigate("Loading");
            }}
             style={{marginHorizontal:10,padding:20,marginTop:10}}>
              <Image style={{width:110,height:110,borderRadius:7,resizeMode:"contain"}} source={{uri:item.image}}/>
              <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"500",marginTop:10}}>{item.name}</Text>
            </Pressable>
          )}/>
        </View>
        <Pressable onPress={() =>navigation.navigate("LoadingScreen2")}>
          <Text style={{fontSize:18,textAlign:"center",color:"gray",marginTop:15}}>Explore</Text>
        </Pressable>
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

