import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Saudacao() {
  const [nome, setNome] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text>
        {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
      </Text>
    </View>
  );
}