import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Profile from '../(tabs)/profile'
import { FontAwesome } from '@expo/vector-icons';
//import auth from '@react-native-firebase/auth';

export default function Login() {
  return (
    <View>
      <TextInput
        style={{
          height:50,
          borderColor:'black',
          borderWidth:1,
          paddingHorizontal:10,
          marginHorizontal:50,
          marginVertical:10}}
        defaultValue='Email'
        clearTextOnFocus
        maxFontSizeMultiplier={1}
      
         />
         <View
          style={{
            borderWidth:1,
          borderColor:'black',
          marginHorizontal:50,
          marginVertical:10,
          marginBottom:20,
          backgroundColor:'red'
          }}>
      <Button
        title='Continue'
        onPress={Profile}
        color={'white'}
        />
        </View>
    

      <Text>-------------------------------or----------------------------</Text>
      
      <View
        style={{
          borderWidth:1,
          borderColor:'black',
          marginHorizontal:50,
          marginVertical:10,
          marginTop:20
        }}>
        <FontAwesome.Button
        name = "phone"
        backgroundColor={'white'}
        color={'black'}
        onPress={()=>Profile}>
        Continue with Phone
        </FontAwesome.Button>
      </View>
      <View
        style={{
          borderWidth:1,
          borderColor:'black',
          marginHorizontal:50,
          marginVertical:10
        }}>
        <FontAwesome.Button
        name = "apple"
        backgroundColor={'white'}
        color={'black'}
        onPress={()=>Profile}>
        Continue with Apple
        </FontAwesome.Button>
      </View>
      <View
        style={{
          borderWidth:1,
          borderColor:'black',
          marginHorizontal:50,
          marginVertical:10
        }}>
        <FontAwesome.Button
        name = "google"
        backgroundColor={'white'}
        color={'black'}
        onPress={()=>Profile}>
        Continue with Google
        </FontAwesome.Button>
      </View>
      <View
        style={{
          borderWidth:1,
          borderColor:'black',
          marginHorizontal:50,
          marginVertical:10
        }}>
      <FontAwesome.Button
        name = "facebook"
        backgroundColor={'white'}
        color={'black'}
        onPress={()=>Profile}>
        Continue with Facebook
        </FontAwesome.Button>
      </View>

    </View>
  );
};