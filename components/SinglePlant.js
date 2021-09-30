import React, {useState} from 'react'
import {Text, View, Button, Image, StyleSheet, ScrollView, PointPropType} from 'react-native'

const SinglePlant = (props) => {
  const [isDry, setIsDry] = useState(true)
  const [name, setName] = useState('');

  return (
    <View style = {styles.innerContainer}>
    <Image style={styles.tinyLogo} source = {props.image} />
    <Text onPress = {() => {props.navigation.navigate('Details', {
      name: 'Details',
      id: props.id,
      name: props.name,
      species: props.species,
      image: props.image
      })}} style = {styles.plantName}>{props.name}</Text>

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
    paddingRight: 80
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
  plantName: {
    fontSize: 30,
    fontFamily: 'Cochin',
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default SinglePlant
