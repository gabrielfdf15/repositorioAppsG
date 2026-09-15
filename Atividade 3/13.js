import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <TextInput style={{border: "2px solid black"}} placeholder='email'></TextInput>
      <TextInput style={{border: "2px solid black"}} placeholder='senha' ></TextInput>
      <Button title='Logar'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  logo:{
    height: 50,
    width: 50,
    backgroundColor: "orange",
    borderRadius: 999
  }, 

  }
);
