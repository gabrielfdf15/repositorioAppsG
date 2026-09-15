import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}><Text>Criar</Text></View>
      <View style={styles.item}><Text>Apagar</Text></View>
      <View style={styles.item}><Text>Salvar</Text></View>
      <View style={styles.item}><Text>Atualizar</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:100,
    height:100
  },
  item: {
    flex: 1,
  }
});
