import React from "react";
import { Text, StyleSheet, View } from "react-native"
const ProfileScreen = (props) => {

  return (
  <View style = {styles.container}>
    <Text style = {styles.headerText}>My Profile</Text>
  <Text>Anna Simon</Text>
  <Text>8 Plants</Text>
  <Text>anna.w.simon1@gmail.com</Text>
  <Text></Text>
  </View>
  );
};


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


module.exports = ProfileScreen

