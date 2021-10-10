import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import Nursery from './Nursery'
import ProfileScreen from './Profile'
import Details from './Details'
import Google from './GoogleVision'
import PlantId from './PlantId'
import PlantIdEx from './PlantIdExample'
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
        name="Identify A Plant"
        component={PlantId}
        options={{ title: 'Identify A Plant' }}
         />
				 <Stack.Screen
        name="Upload Image"
        component={Google}
        options={{ title: 'Upload Image' }}
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


