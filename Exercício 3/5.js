import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{height:50, width:100, backgroundColor:"green"}}></View>
      <View style={{height:100, width:100, backgroundColor:"blue"}}></View>
      <View style={{height:75, width:100, backgroundColor:"red"}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex_start"
  },
  item: {

  }
});
