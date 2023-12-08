import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Profile() {
  return (
    <View>
      <Text
        style={{
          fontSize:40,
        }}> 
        Profile</Text>
    
      <Link
        style={{
          marginTop:30,
          fontSize:20,
          textAlign:'center'
        }} 
        href={'/(modals)/login'}>Login</Link>
    </View>
  )
}