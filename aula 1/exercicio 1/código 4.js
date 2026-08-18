import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Título</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    color: 'tomato',
  },
});