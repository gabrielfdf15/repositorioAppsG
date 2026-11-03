import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.card}>
          <View style={styles.icon}></View>
          <Text>1</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.icon}></View>
          <Text>2</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.icon}></View>
          <Text>3</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.icon}></View>
          <Text>4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',  
  },
  card: {
    width: '49%',
    height: 120,
    backgroundColor: '#3498db',
    marginBottom: 15,
    justifyContent: "center", 
    alignItems: "center"
  },
  icon: {
    width: 75,
    height: 50,
    backgroundColor: "white",
    borderRadius: 60
  }
});