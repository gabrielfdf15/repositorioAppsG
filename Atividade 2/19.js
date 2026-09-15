import React from 'react';
import { View, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  grade: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: {
    width: '48%',   // 2 colunas com folga para o gap (para 3 colunas, use 31%)
    aspectRatio: 1, // deixa o card quadrado
    borderRadius: 12,
  },
});

export default function GradeProdutos({ produtos }) {
  return (
    <View style={s.grade}>
      {produtos.map((p) => (
        <View key={p.id} style={s.card} />
      ))}
    </View>
  );
}
