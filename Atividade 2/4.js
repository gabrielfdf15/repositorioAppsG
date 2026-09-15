import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

export function ListaRuim({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={() => <View style={{ flex: 1, padding: 16 }} />}
    />
  );
}

const s = StyleSheet.create({ item: { flex: 1, padding: 16 } });

export function ListaBoa({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={() => <View style={s.item} />}
    />
  );
}
