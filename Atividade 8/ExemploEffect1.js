import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useToggle } from './useToggle';

export default function ExemploToggle() {
  const [notificacoes, trocarNotificacoes] = useToggle(true);
  const [opcao, trocarOpcao] = useToggle(false);

  return (
    <View style={{ padding: 20, gap: 14 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Notificações</Text>
        <Switch value={notificacoes} onValueChange={trocarNotificacoes} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Outra opção</Text>
        <Switch value={opcao} onValueChange={trocarOpcao} />
      </View>
      <Text>As duas opções têm estados independentes.</Text>
    </View>
  );
}
