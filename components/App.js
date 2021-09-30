import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ListViewBase, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SinglePlant from './SinglePlant';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import Nursery from './Nursery'
import ProfileScreen from './Profile'
import Details from './Details'
const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#149414'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          fontFamily: 'Cochin'
        },
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to PlantIt' }}
        />
        <Stack.Screen
        name="Nursery"
        component={Nursery}
        options={{ title: 'Nursery' }}
         />
         <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
         />
         <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Details' }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 40,
    fontFamily: 'Cochin',
    paddingTop: 30,
    paddingBottom: 30
  },
  navText: {
    fontSize: 10,
    fontFamily: 'Cochin',
    paddingTop: 30,
    paddingBottom: 30
  },
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40
  },
  scrollView: {
    backgroundColor: 'white',
  },
});


