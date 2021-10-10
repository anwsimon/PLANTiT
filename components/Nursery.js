import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SinglePlant from './SinglePlant';
import data from './Data';

const dummyData = [
  {
    id: 1,
    name: 'Rapunzel',
    species: 'Pothos',
    imageURL: require('../plantImages/Rapunzel.png'),
    needsWater: true,
    lastWatered: ''
  },
  {
    id: 2,
    name: 'Hoya',
    species: 'Hoya',
    imageURL: require('../plantImages/Hoya.png'),
    needsWater: true,
    lastWatered: ''
  },
  {
    id: 3,
    name: 'Angie',
    species: 'Anthurium',
    imageURL: require('../plantImages/Angie.png'),
    needsWater: true,
    lastWatered: ''
  },
  {
    id: 4,
    name: 'Money',
    species: 'Money Plant',
    imageURL: require('../plantImages/Money.png'),
    needsWater: true,
    lastWatered: ''
  },
  {
    id: 5,
    name: 'Tyler',
    species: 'Coleus',
    imageURL: require('../plantImages/LovePlant.png'),
    needsWater: true,
    lastWatered: ''
  },
  {
    id: 6,
    name: 'Spike',
    species: 'Cactus',
    imageURL: require('../plantImages/Spike.png'),
    needsWater: true,
    lastWatered: ''
  },
  {
    id: 7,
    name: 'Violet',
    species: 'African Violet',
    imageURL: require('../plantImages/Violet.png'),
    needsWater: true,
    lastWatered: ''
  }
]

const STYLES = ['default', 'dark-content', 'light-content'];


export default function PlantList({ navigation }) {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [hidden, setHidden] = useState(false);
  // console.log(data('Angie'))
  return (
    <View style = {styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        hidden={hidden} />
      <Text style={styles.headerText}>My Nursery </Text>
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle = {styles.scrollView}>
            {dummyData.map((plant) => {
              return (
              <SinglePlant key = {plant.id} name = {plant.name} navigation = {navigation} species = {plant.species} image = {plant.imageURL} needsWater = {plant.needsWater} lastWatered = {plant.lastWatered} contentContainerStyle = {styles.container}/>
            )})}
          </ScrollView>
        </SafeAreaView>
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 40,
    fontFamily: 'Cochin',
    paddingTop: 30,
    paddingBottom: 30
  },
  container: {
    flex: 2,
    backgroundColor: '#E5F6E5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40
  },
  scrollView: {
    backgroundColor: '#E5F6E5',
  },
});


