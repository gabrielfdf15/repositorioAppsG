import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm } from './useForm';

export default function ExemploForm() {
  const validarLogin = ({ email, senha }) => {
    const erros = {};
    if (!email.includes('@')) erros.email = 'Digite um e-mail válido.';
    if (senha.length < 6) erros.senha = 'Use pelo menos 6 caracteres.';
    return erros;
  };

  const { valores, erros, alterar, enviar } =
    useForm({ email: '', senha: '' }, validarLogin);
  const [mensagem, setMensagem] = useState('');

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 12 }}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        value={valores.email}
        onChangeText={t => { alterar('email', t); setMensagem(''); }}
      />
      {!!erros.email && <Text style={{ color: 'red' }}>{erros.email}</Text>}
      <TextInput
        style={{ borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 12 }}
        placeholder="Senha (mín. 6 caracteres)"
        secureTextEntry
        value={valores.senha}
        onChangeText={t => { alterar('senha', t); setMensagem(''); }}
      />
      {!!erros.senha && <Text style={{ color: 'red' }}>{erros.senha}</Text>}
      <Button title="Validar formulário"
        onPress={() => enviar(() => setMensagem('Validação concluída! (sem login real)'))} />
      {!!mensagem && <Text>{mensagem}</Text>}
    </View>
  );
}
