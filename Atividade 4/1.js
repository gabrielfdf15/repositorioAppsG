// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Saudacao = (props) => {
return (
<View style={estilos.caixa}>
<Text style={estilos.texto}>Olá, {props.nome}!</Text>
<Text>Idade: {props.idade}</Text>
</View>
);
};
export default function App() {
return (
<View style={estilos.container}>
<Saudacao nome="Maria" idade={25} />
<Saudacao nome="João" idade={30} />
<Saudacao nome="Ana" idade={22} />
</View>
);
}
const estilos = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
caixa: { marginBottom: 16, padding: 12, backgroundColor: '#eee', borderRadius: 6 },
texto: { fontSize: 18, fontWeight: 'bold' },
});