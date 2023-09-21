import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Divider({ width }) {
  return <View style={{ ...styles.divider, width }} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#545458',
    opacity: 0.5
  }
});
