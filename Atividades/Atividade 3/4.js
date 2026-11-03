import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{height:80, width:80, backgroundColor:"red"}}></View>
      <View style={{height:80, width:80, backgroundColor:"green"}}></View>
      <View style={{height:80, width:80, backgroundColor:"blue"}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  item: {

  }
});
