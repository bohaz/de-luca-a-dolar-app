import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function HistorialScreen() {
  const [fechas, setFechas] = useState([]);
  const [valores, setValores] = useState([]);

  useEffect(() => {
    const obtenerHistorial = async () => {
      try {
        const res = await fetch('https://mindicador.cl/api/dolar');
        const data = await res.json();
        const serie = data.serie.slice(0, 7).reverse();
        const fechas = serie.map(d => new Date(d.fecha).toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit' }));
        const valores = serie.map(d => d.valor);
        setFechas(fechas);
        setValores(valores);
      } catch (error) {
        console.error('Error cargando historial:', error);
      }
    };

    obtenerHistorial();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {valores.length > 0 && (
        <LineChart
          data={{
            labels: fechas,
            datasets: [{ data: valores }],
          }}
          width={Dimensions.get('window').width - 40}
          height={250}
          yAxisSuffix=" CLP"
          fromZero={true}
          chartConfig={{
            backgroundColor: '#f3f4f6',
            backgroundGradientFrom: '#f3f4f6',
            backgroundGradientTo: '#f3f4f6',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`,
            labelColor: () => '#111827',
            strokeWidth: 2,
            propsForDots: {
              r: '3',
              strokeWidth: '2',
              stroke: '#002f6c',
              fill: '#002f6c',
            },
            propsForBackgroundLines: {
              strokeDasharray: '',
              stroke: '#e5e7eb',
            },
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center', 
  },
  
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  chart: { marginVertical: 8, borderRadius: 16, alignSelf: 'center' },
});
