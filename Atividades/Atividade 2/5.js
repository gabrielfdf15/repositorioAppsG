import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#1B2130' },
  destaque: { backgroundColor: '#61DAFB' },
  ativo: { borderWidth: 2 },
  base: { fontSize: 14 },
  erro: { color: 'red' },
  ok: { color: 'green' },
});

export default function ExemplosComposicao({ ativo, erro, topo }) {
  return (
    <>
      <View style={[s.card, s.destaque]} />

      <View style={[s.card, ativo && s.ativo]} />

      <View style={[s.card, { marginTop: topo }]} />

      <Text style={[s.base, erro ? s.erro : s.ok]}>Status</Text>
    </>
  );
}
