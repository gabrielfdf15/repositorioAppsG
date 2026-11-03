import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
      <View style={styles.card}></View>
      <View style={styles.card}></View>
      <View style={styles.card}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    width: 100
  },
  card: {
    backgroundColor: "red",
    width: "49%",
    height: 150
  },

});
