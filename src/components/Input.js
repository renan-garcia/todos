import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({value, onChangeText}) => (
  <TextInput style={styles.input}
    onChangeText={onChangeText}
    value={value}
  />
)

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default Input;