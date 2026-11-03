import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useFetch } from './useFetch';

export default function ExemploFetch() {
  const { dados, carregando, erro } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (carregando) return <ActivityIndicator size="large" />;
  if (erro) return <Text>Erro: {erro}</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
        {dados?.length ?? 0} posts carregados
      </Text>
      <FlatList
        data={(dados || []).slice(0, 12)}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Text style={{ paddingVertical: 8 }}>{item.id}. {item.title}</Text>}
      />
    </View>
  );
}
