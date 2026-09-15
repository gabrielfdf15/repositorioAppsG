import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.icon}></View>
        <View style={styles.icon}></View>
        <View style={styles.icon}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    minHeight: 100,
    justifyContent: "flex-end"
  },
  bar: {
    height: 100,
    backgroundColor: "black",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 60,
    width: 60
  }
});
