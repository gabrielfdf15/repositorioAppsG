import React from 'react';
import { View, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'flex-start', // vale para todos
  },
  item: {
    width: 40,
    height: 40,
  },
});

export default function ExemploAlignSelf() {
  return (
    <View style={s.linha}>
      <View style={s.item} />
      <View style={[s.item, { alignSelf: 'flex-end' }]} />
      <View style={s.item} />
    </View>
  );
}
