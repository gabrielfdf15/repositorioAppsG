import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TelaA({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('B')}>
      <Text>Ir</Text>
    </TouchableOpacity>
  );
}

function TelaB({ route }) {
  const nome = route.params?.nome || 'Sem nome';
  return <Text>{nome}</Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="A" component={TelaA} />
        <Stack.Screen name="B" component={TelaB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
