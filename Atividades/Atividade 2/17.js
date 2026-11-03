import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  card: { position: 'relative' }, // padrão
  foto: { width: '100%', height: 160 },
  selo: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
  },
  seloTexto: { color: '#fff', fontWeight: 'bold' },
});

export default function CardComSelo({ imagem }) {
  return (
    <View style={s.card}>
      <Image style={s.foto} source={imagem} />
      <View style={s.selo}>
        <Text style={s.seloTexto}>NOVO</Text>
      </View>
    </View>
  );
}
