import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image style={{ width: 250, height: 250 }} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
        <Text style={{justifySelf: "flex-start"}}>Título</Text>
        </View>
        <Text style={{justifySelf: "flex-end"}}>R$ 70,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    minHeight: 100,
  },
  card:{
    height: 650,
    width: 500,
    borderRadius: 25,
    backgroundColor: "#0077ff",
    justifyContent: "space-between",
    alignItems: "center"
  }
  }
);
