import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={[styles.event, { alignSelf: 'flex-start' }]}>
        <Text>29/06 Teste 1</Text>
      </View>
      <View style={[styles.event, { alignSelf: 'flex-end' }]}>
        <Text>05/07 Teste 2</Text>
      </View>
      <View style={[styles.event, { alignSelf: 'flex-start' }]}>
        <Text>17/07 Teste 3</Text>
      </View>
      <View style={[styles.event, { alignSelf: 'flex-end' }]}>
        <Text>30/07 Teste 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
   flex: 1, 
   justifyContent: 'center', 
   position: 'relative' },
  line: { 
    position: 'absolute', 
    width: 2,
    height: '100%', 
    alignSelf: 'center', 
    backgroundColor: '#000' },
  event: { 
    width: '45%', 
    height: 50, 
    backgroundColor: "#008cff", 
    margin: 10, 
    alignItems: "center",
    justifyContent:"center"
  },
});