import { useState } from 'react';
import { TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <TextInput
      value={nome}
      onChangeText={setNome}
      placeholder="Digite seu nome"
    />
  );
}