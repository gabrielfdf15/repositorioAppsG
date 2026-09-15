import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemPhoto} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>Nome do Produto</Text>
          <Text style={styles.itemPrice}>R$ 99,90</Text>
        </View>
      </View>
            <View style={styles.itemContainer}>
        <View style={styles.itemPhoto} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>Nome do Produto</Text>
          <Text style={styles.itemPrice}>R$ 99,90</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemPhoto: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#3498db',
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});