import React from 'react';
import { View, Text } from 'react-native';

export function SemHeranca() {
  return (
    <View>
      <Text>Este texto continua branco</Text>
    </View>
  );
}

export function ComHeranca() {
  return (
    <Text style={{ color: '#61DAFB' }}>
      Ciano com{' '}
      <Text style={{ fontWeight: 'bold' }}>negrito</Text>
    </Text>
  );
}
