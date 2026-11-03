import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const produtos = [
  { id: '1', nome: 'Camiseta', preco: 49.9, descricao: 'Algodão, tamanho M' },
  { id: '2', nome: 'Tênis', preco: 199.5, descricao: 'Corrida, tamanho 42' },
  { id: '3', nome: 'Mochila', preco: 120, descricao: 'Impermeável, 20L' },
  { id: '4', nome: 'Boné', preco: 35.75, descricao: 'Ajustável, preto' },
];

const input = { borderWidth: 1, padding: 8, marginBottom: 10 };
const centro = { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 };

function TelaInicial({ navigation }) {
  const [nomeDigitado, setNomeDigitado] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput placeholder="Nome" value={nomeDigitado} onChangeText={setNomeDigitado} style={input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={input} />
      <TextInput placeholder="Idade" value={idade} onChangeText={setIdade} keyboardType="numeric" style={input} />

      <Button title="Enviar Nome" onPress={() => navigation.navigate('Detalhes', { nome: nomeDigitado })} />
      <View style={{ height: 10 }} />
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Detalhes', { nome: nomeDigitado, email, idade })}
      />
      <View style={{ height: 10 }} />
      <Button title="Ver produtos" onPress={() => navigation.navigate('Lista')} />
    </View>
  );
}

function TelaDetalhes({ route }) {
  const { nome, email, idade } = route.params;
  return (
    <View style={centro}>
      <Text>Nome: {nome}</Text>
      {email !== undefined && <Text>Email: {email}</Text>}
      {idade !== undefined && <Text>Idade: {idade}</Text>}
    </View>
  );
}

function TelaLista({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 16, borderBottomWidth: 1 }}
            onPress={() =>
              navigation.navigate('Produto', {
                nome: item.nome,
                preco: item.preco,
                descricao: item.descricao,
              })
            }
          >
            <Text>{item.nome} — R$ {item.preco.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Notificações" onPress={() => navigation.navigate('Notificacoes')} />
    </View>
  );
}

function TelaProduto({ route, navigation }) {
  const { nome, preco, descricao } = route.params;
  const pedidoId = route.params?.pedidoId || 'N/A';
  return (
    <View style={centro}>
      <Text>{nome}</Text>
      <Text>R$ {preco.toFixed(2)}</Text>
      <Text>{descricao}</Text>
      <Text>Pedido #{pedidoId}</Text>
      <Button title="Voltar à lista" onPress={() => navigation.goBack()} />
    </View>
  );
}

function TelaNotificacoes() {
  return (
    <View style={centro}>
      <Text>Sem notificações</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicial} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Detalhes" component={TelaDetalhes} />
        <Stack.Screen name="Lista" component={TelaLista} options={{ title: 'Produtos' }} />
        <Stack.Screen name="Produto" component={TelaProduto} />
        <Stack.Screen name="Notificacoes" component={TelaNotificacoes} options={{ title: 'Notificações' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
