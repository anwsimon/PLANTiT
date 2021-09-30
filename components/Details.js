import React, {useState} from 'react'
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native'
import { Link } from '@react-navigation/native'

const PlantDetails = ({route, navigation}) => {
  const [isDry, setIsDry] = useState(true)
  // const [name, setName] = useState('');
  const {id, name, image, species} = route.params

  return (
    <View style = {styles.innerContainer}>
      <Text style={styles.headerText}>{name}</Text>
      <Image style={styles.tinyLogo} source = {image} />
    <Text>Hello, I am {name}, I am a {species} and I {isDry ? "need some water" : "am watered" }!
    </Text>
    <Button onPress = {() => {
        setIsDry(false)
      }}
      disabled = {!isDry}
      title = {isDry ? "Needs Water" : "Thank you!"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: '#E5F6E5'
  },
  tinyLogo: {
    width: 200,
    height: 200,
    alignItems: 'center'
  },
  logo: {
    width: 66,
    height: 58,
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'Cochin',
    paddingTop: 30,
    paddingBottom: 30
  }
});

export default PlantDetails
