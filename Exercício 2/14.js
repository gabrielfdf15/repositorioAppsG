import React from 'react';
import { View } from 'react-native';

export default function ExemploFlexProporcao() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 2, backgroundColor: '#61DAFB' }} />
      <View style={{ flex: 1, backgroundColor: '#FFB86C' }} />
    </View>
  );
}
