import { Text, TouchableOpacity, Button, FlatList, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const centro = { flex: 1, justifyContent: 'center', alignItems: 'center' };

const filmes = [
  { id: '1', titulo: 'Matrix', ano: 1999 },
  { id: '2', titulo: 'Interestelar', ano: 2014 },
  { id: '3', titulo: 'Parasita', ano: 2019 },
  { id: '4', titulo: 'Cidade de Deus', ano: 2002 },
  { id: '5', titulo: 'Inception', ano: 2010 },
];

function TelaLista({ navigation }) {
  return (
    <FlatList
      data={filmes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ padding: 16, borderBottomWidth: 1 }}
          onPress={() => navigation.navigate('Filme', { titulo: item.titulo, ano: item.ano })}
        >
          <Text>{item.titulo} ({item.ano})</Text>
        </TouchableOpacity>
      )}
    />
  );
}

function TelaFilme({ route, navigation }) {
  const { titulo, ano } = route.params;
  return (
    <View style={centro}>
      <Text>{titulo}</Text>
      <Text>{ano}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={TelaLista} options={{ title: 'Início' }} />
      <Stack.Screen name="Filme" component={TelaFilme} />
    </Stack.Navigator>
  );
}

function TelaPerfil({ navigation }) {
  return (
    <View style={centro}>
      <Button
        title="Ver filme favorito"
        onPress={() =>
          navigation.navigate('HomeTab', {
            screen: 'Filme',
            params: { titulo: 'Matrix', ano: 1999 },
          })
        }
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ tabBarLabel: 'Início' }} />
        <Tab.Screen
          name="PerfilTab"
          component={TelaPerfil}
          options={{ tabBarLabel: 'Perfil', headerShown: true, title: 'Perfil' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
