import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.imageContainer}>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
       <Image style={styles.image} source={{uri: "https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}}></Image>
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
  imageContainer: {
    width: 500,
    height: 500,
    flexWrap: "wrap"
  }
  ,
  image:{
    width: "33.3%",
    height: "calc(500px / 3)"
  }

  }
);
