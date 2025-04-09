import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import CurrencyInput from '../components/CurrencyInput';
import ConvertButton from '../components/ConvertButton';
import ResultBox from '../components/ResultBox';
import Toast from 'react-native-toast-message';

export default function Index() {
  const [clp, setClp] = useState('');
  const [clpRaw, setClpRaw] = useState('');
  const [usd, setUsd] = useState(null);
  const [fecha, setFecha] = useState('');

  const formatearCLP = (valor) => {
    const limpio = valor.replace(/\D/g, '');
    setClpRaw(limpio);
    const formateado = new Intl.NumberFormat('es-CL').format(limpio);
    setClp(formateado);
  };

  const convertir = async () => {
    if (!clpRaw || isNaN(clpRaw) || parseFloat(clpRaw) === 0) {
      Toast.show({
        type: 'error',
        text1: 'Entrada inválida',
        text2: 'Por favor ingresa un valor numérico mayor que cero',
        position: 'bottom',
      });      
      setUsd(null);  
      setFecha(''); 
      return;
    }
  
    try {
      const res = await fetch('https://mindicador.cl/api/dolar');
      const data = await res.json();
      const valorDolar = data.serie[0].valor;
      const resultado = parseFloat(clpRaw) / valorDolar;
  
      setUsd(resultado.toFixed(2));
  
      const fechaISO = data.serie[0].fecha;
      const fechaObj = new Date(fechaISO);
      const fechaFormateada = fechaObj.toLocaleDateString('es-CL');
      const horaFormateada = fechaObj.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
      setFecha(`${fechaFormateada} - ${horaFormateada}`);
    } catch (error) {
      console.error('Error al obtener tipo de cambio:', error);
      alert('No se pudo obtener el valor del dólar. Intenta más tarde.');
    }
  };
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header />
      <CurrencyInput value={clp} onChange={formatearCLP} />
      <ConvertButton onPress={convertir} />
      <ResultBox usd={usd} fecha={fecha} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f3f4f6',
  },
});
