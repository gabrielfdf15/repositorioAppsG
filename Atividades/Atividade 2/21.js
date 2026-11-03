import React from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#12151C' },
  header: { height: 56, justifyContent: 'center', padding: 16 },
  titulo: { color: '#fff', fontSize: 18, fontWeight: '600' },
  conteudo: { flex: 1 },
  footer: { padding: 16, borderTopWidth: 1, borderColor: '#323D54' },
});

// O segredo: flex: 1 no container raiz e flex: 1 na área que deve crescer.
export default function TelaConversas() {
  return (
    <SafeAreaView style={s.tela}>
      <View style={s.header}>
        <Text style={s.titulo}>Conversas</Text>
      </View>
      <ScrollView style={s.conteudo}>{/* cresce e rola */}</ScrollView>
      <View style={s.footer}>
        <Text>Nova mensagem</Text>
      </View>
    </SafeAreaView>
  );
}
