import 'react-native-gesture-handler';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const centro = { flex: 1, justifyContent: 'center', alignItems: 'center' };

function TelaHome({ navigation }) {
  return (
    <View style={centro}>
      <Text>Deslize da esquerda para abrir o menu</Text>
      <Button
        title="Ir para Config com tema"
        onPress={() => navigation.navigate('Config', { tema: 'escuro' })}
      />
    </View>
  );
}

function TelaConfiguracoes({ route }) {
  const tema = route.params?.tema || 'claro';
  return (
    <View style={centro}>
      <Text>Tema: {tema}</Text>
    </View>
  );
}

function TelaSobre() {
  return (
    <View style={centro}>
      <Text>Sobre o app</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TelaHome} options={{ title: 'Início' }} />
        <Drawer.Screen name="Config" component={TelaConfiguracoes} options={{ title: 'Configurações' }} />
        <Drawer.Screen name="Sobre" component={TelaSobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
