import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const Botao = ({ titulo = 'Clique aqui', cor = '#007AFF', onPress }) => {
return (
<TouchableOpacity
style={[estilos.botao, { backgroundColor: cor }]}
onPress={onPress}
>
<Text style={estilos.textoBotao}>{titulo}</Text>
</TouchableOpacity>
);
};
export default function App() {
return (
<View style={estilos.container}>
<Botao onPress={() => alert('Padrão!')} />
<Botao titulo="Salvar" cor="#28a745" onPress={() => alert('Salvo!')} />
<Botao titulo="Excluir" cor="#dc3545" onPress={() => alert('Excluído!')} />
</View>
);
}
const estilos = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
botao: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 6 },
textoBotao: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});