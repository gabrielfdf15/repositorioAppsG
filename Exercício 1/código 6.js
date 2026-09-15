import { Button, TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Button title="Clique" onPress={() => alert('Oi!')} />

      <TouchableOpacity onPress={() => alert('Toque!')}>
        <Text>Botão personalizado</Text>
      </TouchableOpacity>
    </View>
  );
}