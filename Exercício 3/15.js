import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.nomeContainer}>
         <View style={styles.profileImage}></View>
         <Text>Nome</Text>
       </View>
       <View style={styles.postImage}></View>
       <Button title='curtir'></Button>
       <Button title='comentar'></Button>
      </View>
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
  postContainer: {
    width: 600,
    height: 600,
    gap: 15,
    padding: 5,
    border: "2px solid black",
    justifyContent: "center",
    alignItems: "center"
  },
  nomeContainer:{
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    alignSelf: "flex-start"
  },
  profileImage:{
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  postImage:{
    width: 500,
    height: 400,
    backgroundColor: "violet"
  }
  }
);
