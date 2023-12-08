import { View, Text,Image, ImageBackground } from "react-native";
import React, { useId, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";
import Categories from "../../components/ExploreHeader";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { ScreenStackHeaderRightView } from "react-native-screens";
const [cabinPressed, setCabin] = React.useState(false);
  const [trendPressed, setTrend] = React.useState(false);
export default function Explore() {
  //const [cabinPressed, setCabin] = React.useState(false);
  //const [trendPressed, setTrend] = React.useState(false);
  return (
    
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
      <View
        style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 16,
        marginTop:150,
        backgroundColor:'white'
        }}>
        <ScrollView
        id="iconScroll"
        horizontal>
          <MaterialIcons.Button
            name='house-siding'
            backgroundColor='white'
            color='black'
            onPress={cabins}>
            Cabins
          </MaterialIcons.Button>
          <MaterialIcons.Button
            name='local-fire-department'
            backgroundColor='white'
            color='black'
            onPress={()=>setTrend(true)}>
            Trending
          </MaterialIcons.Button>
          <MaterialIcons.Button
            name='videogame-asset'
            backgroundColor='white'
            color='black'
            onPress={()=>Listings}>
            Play
          </MaterialIcons.Button>
          <MaterialIcons.Button
            name='apartment'
            backgroundColor='white'
            color='black'
            onPress={()=>Listings}>
            City
          </MaterialIcons.Button>
          <MaterialIcons.Button
            name='beach-access'
            backgroundColor='white'
            color='black'
            onPress={()=>Listings}>
            Beachfront
          </MaterialIcons.Button>
          <MaterialIcons.Button
            name='nature-people'
            backgroundColor='white'
            color='black'
            onPress={()=>Listings}>
            Countryside
          </MaterialIcons.Button>
          <MaterialIcons.Button
            name='home'
            backgroundColor='white'
            color='black'
            onPress={()=>Listings}>
            Tiny Homes
          </MaterialIcons.Button>
          
        </ScrollView>
        </View>
      
        <View
          style={{
            alignItems:'center',
            justifyContent:'space-evenly'
          }}>
          {cabinPressed?(
          <ScrollView>
          <Image
            style={{
              width:200,
              height:200
            }}
            source={require('../../assets/images/cabin_1.jpg')}
          />
          <Image
            style={{
              width:200,
              height:200
            }}
            source={require('../../assets/images/cabin_2.jpg')}
            />
            <Image
            style={{
              width:200,
              height:200
            }}
            source={require('../../assets/images/cabin_3.jpg')}
            />
          </ScrollView>):(<Text></Text>)}
          {trendPressed?(
          <ScrollView>
          <Image
            style={{
              width:200,
              height:200
            }}
            source={require('../../assets/images/trend_1.jpg')}
          />
          <Image
            style={{
              width:200,
              height:200
            }}
            source={require('../../assets/images/trend_2.jpg')}
            />
            <Image
            style={{
              width:200,
              height:200
            }}
            source={require('../../assets/images/trend_3.jpg')}
            />
          </ScrollView>):(<Text></Text>)}
        </View>
        
        
      </View>
      
      
    
    
  )
}
function cabins(){
  setCabin(true)
  setTrend(false)
}
