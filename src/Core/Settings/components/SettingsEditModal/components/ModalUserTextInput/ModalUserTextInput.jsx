import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

export default function ModalUserTextInput(props) {
  const { placeholder, value, onChangeText, multiline } = props;

  return (
    <View style={inputStyles.container}>
      <TextInput
        multiline={multiline}
        numberOfLines={4}
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
    paddingVertical: 12
  },
  input: {
    paddingTop: 0,
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 16,
    color: '#ffffff'
  }
});