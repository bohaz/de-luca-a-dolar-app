import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultBox({ usd, fecha }) {
  if (!usd && !fecha) return null;

  return (
    <View style={styles.container}>
      {usd && <Text style={styles.result}>USD: ${usd}</Text>}
      {fecha && (
        <Text style={styles.updateText}>
          Última actualización: {fecha}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 20 },
  result: {
    fontSize: 24,
    color: '#065f46',
    fontWeight: 'bold',
    backgroundColor: '#d1fae5',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
  updateText: {
    marginTop: 10,
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
  },
});
