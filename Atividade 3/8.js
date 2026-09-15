import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}></View>
      <Text>Aluno</Text>
      <Text>Bio: Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  item: {
  },
  profile:{
    backgroundColor: "red",
    height: 100,
    width:100
  }
});
