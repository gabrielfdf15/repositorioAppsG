import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.fieldRow}>
          <Text style={styles.label}>Nome:</Text>
          <View style={styles.input} />
        </View>

        <View style={styles.fieldRow}>
          <Text style={styles.label}>E-mail:</Text>
          <View style={styles.input} />
        </View>

        <View style={styles.fieldRow}>
          <Text style={styles.label}>Senha:</Text>
          <View style={styles.input} />
        </View>

        <Button title='Enviar' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 20,
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    marginRight: 10,
    textAlign: 'right',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  formContainer: {
    width: 350.,
    height: 500,
        justifyContent: 'center',
  }
});