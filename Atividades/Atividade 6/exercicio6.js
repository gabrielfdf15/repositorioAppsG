import { Text, TouchableOpacity, Button, FlatList, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const receitas = [
  { id: '1', nome: 'Panqueca', tempo: '20 min', ingredientes: 'Ovo, leite, farinha' },
  { id: '2', nome: 'Macarrão ao molho', tempo: '25 min', ingredientes: 'Macarrão, tomate, alho' },
  { id: '3', nome: 'Bolo de cenoura', tempo: '50 min', ingredientes: 'Cenoura, ovo, açúcar, farinha' },
];

function DetalheReceita({ route, navigation }) {
  const { nome, tempo, ingredientes } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20 }}>{nome}</Text>
      <Text>Preparo: {tempo}</Text>
      <Text>Ingredientes: {ingredientes}</Text>
      {navigation.canGoBack() && <Button title="Voltar" onPress={() => navigation.goBack()} />}
    </View>
  );
}

function ListaReceitas({ navigation }) {
  return (
    <FlatList
      data={receitas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ padding: 16, borderBottomWidth: 1 }}
          onPress={() =>
            navigation.navigate('Detalhe', {
              nome: item.nome,
              tempo: item.tempo,
              ingredientes: item.ingredientes,
            })
          }
        >
          <Text>{item.nome}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

function ReceitasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={ListaReceitas} options={{ title: 'Receitas' }} />
      <Stack.Screen name="Detalhe" component={DetalheReceita} options={{ title: 'Detalhe' }} />
    </Stack.Navigator>
  );
}

function TelaFavoritos({ navigation }) {
  return <DetalheReceita route={{ params: receitas[0] }} navigation={navigation} />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Receitas" component={ReceitasStack} />
        <Tab.Screen name="Favoritos" component={TelaFavoritos} options={{ headerShown: true }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
