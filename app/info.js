import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

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
        Ten en cuenta que este valor puede diferir del tipo de cambio mostrado en buscadores como Google, ya que ellos reflejan el mercado internacional en tiempo real. Nosotros usamos el{' '}
        <Text style={styles.bold}>dólar observado</Text>, publicado por el Banco Central de Chile y actualizado diariamente.
      </Text>

      <Text style={styles.text}>
        Para conocer más, puedes visitar sitios oficiales como el{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://www.bcentral.cl')}
        >
          Banco Central de Chile
        </Text>.
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
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#374151',
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#e5e7eb',
    padding: 16, 
    borderRadius: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    fontWeight: 'bold',
    color: '#002f6c',
  },
});
