import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const Contador = ({ valor, onIncrementar, onDecrementar }) => {
return (
<View style={estilos.linha}>
<TouchableOpacity onPress={onDecrementar} style={estilos.botao}>
<Text style={estilos.textoBotao}>-</Text>
</TouchableOpacity>
<Text style={estilos.valor}>{valor}</Text>
<TouchableOpacity onPress={onIncrementar} style={estilos.botao}>
<Text style={estilos.textoBotao}>+</Text>
</TouchableOpacity>
</View>
);
};
export default function App() {
const [quantidade, setQuantidade] = useState(0);
return (
<View style={estilos.container}>
<Text style={estilos.titulo}>Quantidade de itens:</Text>
<Contador
valor={quantidade}
onIncrementar={() => setQuantidade(quantidade + 1)}
onDecrementar={() => setQuantidade(Math.max(0, quantidade - 1))}
/>
</View>
);
}
const estilos = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
titulo: { fontSize: 18, marginBottom: 12 },
linha: { flexDirection: 'row', alignItems: 'center', gap: 16 },
botao: { backgroundColor: '#007AFF', width: 44, height: 44,
borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
textoBotao: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
valor: { fontSize: 28, fontWeight: 'bold', minWidth: 40, textAlign: 'center' },
});