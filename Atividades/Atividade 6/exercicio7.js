import 'react-native-gesture-handler';
import { Text, TouchableOpacity, FlatList, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const contatos = [
  { id: '1', nome: 'Ana', telefone: '(11) 99999-1111', email: 'ana@email.com', favorito: true },
  { id: '2', nome: 'Bruno', telefone: '(11) 99999-2222', email: 'bruno@email.com', favorito: false },
  { id: '3', nome: 'Carla', telefone: '(11) 99999-3333', email: 'carla@email.com', favorito: true },
];

function Lista({ navigation, apenasFavoritos }) {
  const dados = apenasFavoritos ? contatos.filter((c) => c.favorito) : contatos;
  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ padding: 16, borderBottomWidth: 1 }}
          onPress={() =>
            navigation.navigate('Detalhe', {
              nome: item.nome,
              telefone: item.telefone,
              email: item.email,
            })
          }
        >
          <Text>{item.nome}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const TelaTodos = (props) => <Lista {...props} apenasFavoritos={false} />;
const TelaFavoritos = (props) => <Lista {...props} apenasFavoritos />;

function ContatosDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Todos" component={TelaTodos} />
      <Drawer.Screen name="Favoritos" component={TelaFavoritos} />
    </Drawer.Navigator>
  );
}

function TelaDetalhe({ route }) {
  const { nome, telefone, email } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{nome}</Text>
      <Text>{telefone}</Text>
      <Text>{email}</Text>
    </View>
  );
}

function ContatosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={ContatosDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhe" component={TelaDetalhe} />
    </Stack.Navigator>
  );
}

function TelaSobre() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>App de contatos v1.0</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Contatos" component={ContatosStack} />
        <Tab.Screen name="Sobre" component={TelaSobre} options={{ headerShown: true }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
