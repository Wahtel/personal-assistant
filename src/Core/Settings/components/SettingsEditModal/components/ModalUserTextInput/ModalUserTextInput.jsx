import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

export default function ModalUserTextInput({ placeholder, value, onChangeText }) {
  return (
    <View style={inputStyles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#EBEBF599'
        value={value}
        onChangeText={onChangeText}
        style={inputStyles.input}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    backgroundColor: '#7676803D',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12},
  input: {
    fontSize: 16,
    color: '#ffffff'
  }
});