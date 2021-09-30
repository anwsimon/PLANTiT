import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Button from './Button'

const HomeScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <Button
      title="Nursery"
      onPress={() =>
        navigation.navigate('Nursery', { name: 'Nursery' })
      }
    />

    <Button
      title="Profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Profile' })
      }
    />
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
    flex: 1,
    backgroundColor: '#E5F6E5',
    alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: "column",
    paddingTop: 50,
    paddingBottom: 50,
  },
  scrollView: {
    backgroundColor: '#E5F6E5',
  },
});

module.exports = HomeScreen
