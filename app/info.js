import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function InfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.text}>
        Esta aplicación utiliza datos oficiales desde el sitio chileno{' '}
        <Text style={styles.link}>mindicador.cl</Text> para obtener el valor del dólar actualizado frente al peso chileno.
      </Text>

      <Text style={styles.text}>
        El tipo de cambio puede variar a lo largo del día debido a la oferta y demanda del mercado financiero. Esta app consulta el valor actualizado cada vez que presionas "Convertir".
      </Text>

      <Text style={styles.text}>
        Si deseas conocer más sobre el funcionamiento del mercado cambiario, te recomendamos visitar sitios oficiales como el Banco Central de Chile.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#111827',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#374151',
  },
  link: {
    fontWeight: 'bold',
    color: '#002f6c',
  },
});
