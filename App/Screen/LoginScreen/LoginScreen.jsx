import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
      <Image
      source={require('../../../assets/images/car-marker.jpg')} // Adjust relative path
        style={styles.logoImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    logoImage:{
        width:200,
        height:40,
        objectFit:'contain'
    }

})