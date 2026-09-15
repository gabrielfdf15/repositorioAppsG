import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.header}></View>
      <View style={styles.content}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    height: 60,
  },
  content:{
    flex:1,
    overflow: "scroll",
    maxHeight: "calc(100% - 60px)"
  }
});
