import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CurrencyInput({ value, onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Ingresa CLP"
      keyboardType="numeric"
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 18,
  },
});
