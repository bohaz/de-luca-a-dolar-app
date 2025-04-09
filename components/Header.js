import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ChileFlag from '../assets/chile.png';
import UsaFlag from '../assets/usa.png';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>De Luca a Dólar</Text>
      <View style={styles.flagsContainer}>
        <Image source={ChileFlag} style={styles.flag} resizeMode="contain" />
        <Text style={styles.lightning}>⚡</Text>
        <Image source={UsaFlag} style={styles.flag} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', marginBottom: 30 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginTop: 10,
  },
  flagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  flag: {
    width: 50,
    height: 35,
  },
  lightning: {
    fontSize: 30,
    marginHorizontal: 10,
  },
});
