import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
const ItemAluno = ({ nome, nota }) => {
const aprovado = nota >= 7;
return (
<View style={[estilos.item,
{ backgroundColor: aprovado ? '#d4edda' : '#f8d7da' }]}>
<Text style={estilos.nome}>{nome}</Text>
<Text>Nota: {nota} — {aprovado ? 'Aprovado' : 'Reprovado'}</Text>
</View>
);
};
export default function App() {
const alunos = [
{ id: '1', nome: 'Lucas', nota: 8.5 },
{ id: '2', nome: 'Camila', nota: 5.0 },
{ id: '3', nome: 'Pedro', nota: 9.2 },
{ id: '4', nome: 'Julia', nota: 6.8 },
];
return (
<View style={estilos.container}>
<Text style={estilos.titulo}>Boletim da Turma</Text>
<FlatList
data={alunos}
keyExtractor={(item) => item.id}
renderItem={({ item }) =>
<ItemAluno nome={item.nome} nota={item.nota} />}
/>
</View>
);
}
const estilos = StyleSheet.create({
container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
item: { padding: 12, marginBottom: 8, borderRadius: 6 },
nome: { fontSize: 16, fontWeight: 'bold' },
});