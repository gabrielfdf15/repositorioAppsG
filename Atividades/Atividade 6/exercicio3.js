import { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const centro = { flex: 1, justifyContent: 'center', alignItems: 'center' };

function TelaHome() {
  const [contador, setContador] = useState(0);
  return (
    <View style={centro}>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}

function TelaBusca() {
  const [texto, setTexto] = useState('');
  return (
    <View style={centro}>
      <TextInput
        placeholder="Buscar..."
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, padding: 8, width: 200 }}
      />
    </View>
  );
}

function TelaPerfil() {
  return (
    <View style={centro}>
      <Text>Perfil</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#28a745',
          tabBarInactiveTintColor: '#999',
        }}
      >
        <Tab.Screen
          name="Home"
          component={TelaHome}
          options={{ tabBarLabel: 'Início', tabBarIcon: () => <Text>H</Text> }}
        />
        <Tab.Screen
          name="Busca"
          component={TelaBusca}
          options={{ tabBarLabel: 'Busca', tabBarIcon: () => <Text>B</Text> }}
        />
        <Tab.Screen
          name="Perfil"
          component={TelaPerfil}
          options={{ tabBarLabel: 'Perfil', tabBarIcon: () => <Text>P</Text> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
