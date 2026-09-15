import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}></View>
      <View style={styles.item}></View>
      <View style={styles.item}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 15
  },
  item: {
    backgroundColor: "#000",
    width:100,
    height: 100
  }
});
