import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TelaInicial({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá, navegação!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
        <Text>Ir para Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

function TelaDetalhes({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estou na tela de detalhes</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicial} options={{ title: 'Home' }} />
        <Stack.Screen name="Detalhes" component={TelaDetalhes} options={{ title: 'Detalhes do Item' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
