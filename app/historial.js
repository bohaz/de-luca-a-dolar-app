import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function HistorialScreen() {
  const [fechas, setFechas] = useState([]);
  const [valores, setValores] = useState([]);
  const [mesYAnio, setMesYAnio] = useState('');

  useEffect(() => {
    const obtenerHistorial = async () => {
      try {
        const res = await fetch('https://mindicador.cl/api/dolar');
        const data = await res.json();
        const serie = data.serie.slice(0, 7).reverse();
        const fechas = serie.map(d =>
          new Date(d.fecha).toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit' })
        );
        const valores = serie.map(d => d.valor);
        setFechas(fechas);
        setValores(valores);

        const primerFecha = new Date(serie[0].fecha);
        const mesAnio = primerFecha.toLocaleDateString('es-CL', {
          month: 'long',
          year: 'numeric',
        });
        setMesYAnio(mesAnio);
      } catch (error) {
        console.error('Error cargando historial:', error);
      }
    };

    obtenerHistorial();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mesYAnio !== '' && (
        <Text style={styles.subLegend}>Historial de {mesYAnio}</Text>
      )}
      <Text style={styles.legend}>Valores en pesos chilenos (CLP)</Text>

      {valores.length > 0 && (
        <LineChart
          data={{
            labels: fechas,
            datasets: [{ data: valores }],
          }}
          width={Dimensions.get('window').width - 60}
          height={250}
          yAxisSuffix=""
          fromZero
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
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
    padding: 24,
    alignItems: 'center',
  },
  legend: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  subLegend: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  chart: {
    marginVertical: 8,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
});
