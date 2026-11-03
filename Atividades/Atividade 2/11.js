import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

const s = StyleSheet.create({
  fixo: { width: 120 },
  percentual: { width: '50%' },
  flexivel: { flex: 1 },
  proporcao: { aspectRatio: 16 / 9 },
  toqueMinimo: { minHeight: 48 },
  limite: { maxWidth: 480 },
  linhaFina: { borderWidth: StyleSheet.hairlineWidth },
});

// Reagindo ao tamanho da tela
export function Grade() {
  const { width } = useWindowDimensions();
  const colunas = width > 600 ? 3 : 2;
  return <View style={{ width: width / colunas }} />;
}

export default s;
