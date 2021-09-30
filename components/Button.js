import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button (props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#F2EFDE'
  },
  text: {
    fontSize: 20,
    fontFamily: 'Cochin',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: '#149414',
  },
});
