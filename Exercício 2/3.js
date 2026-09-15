import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardStyleSheet() {
  return (
    <View style={s.card}>
      <Text style={s.texto}>Oi</Text>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#1B2130',
    borderRadius: 12,
  },
  texto: { color: '#fff' },
});
