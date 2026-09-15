import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  centro: {
    flex: 1,
    justifyContent: 'center', // eixo principal
    alignItems: 'center',     // eixo cruzado
  },
});

// Funciona para loading, estado vazio, tela de login... sempre o mesmo trio
export function Centralizado({ children }) {
  return <View style={s.centro}>{children}</View>;
}

// ScrollView tem dois estilos: style (área que rola) e
// contentContainerStyle (conteúdo lá dentro). Use flexGrow: 1, não flex: 1.
export function TelaComScroll({ children }) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
        padding: 16,
        gap: 12,
      }}
    >
      {children}
    </ScrollView>
  );
}
