import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const s = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
  },
  avatar: { width: 44, height: 44, borderRadius: 22 },
  textos: { flex: 1 }, // ocupa a sobra e empurra a hora
  nome: { fontWeight: '600' },
  sub: { color: '#97A3B8' },
  hora: { color: '#97A3B8', fontSize: 12 },
});

// Padrão fixo · flexível · fixo: avatar, textos, hora
export default function ItemConversa({ foto }) {
  return (
    <View style={s.item}>
      <Image style={s.avatar} source={foto} />
      <View style={s.textos}>
        <Text style={s.nome} numberOfLines={1}>Ana Souza</Text>
        <Text style={s.sub} numberOfLines={1}>Combinado, até amanhã!</Text>
      </View>
      <Text style={s.hora}>12:04</Text>
    </View>
  );
}
