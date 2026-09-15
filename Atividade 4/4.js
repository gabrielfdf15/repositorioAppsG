import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Painel = ({ titulo, children }) => {
return (
<View style={estilos.painel}>
<Text style={estilos.titulo}>{titulo}</Text>
<View style={estilos.conteudo}>{children}</View>
</View>
);
};
export default function App() {
return (
<View style={estilos.container}>
<Painel titulo="Informações do Usuário">
<Text>Nome: Carlos</Text>
<Text>Email: carlos@email.com</Text>
<Text>Cidade: São Paulo</Text>
</Painel>
<Painel titulo="Estatísticas">
<Text>Posts: 42</Text>
<Text>Seguidores: 1200</Text>
</Painel>
</View>
);
}
const estilos = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', padding: 20 },
painel: { marginBottom: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
titulo: { fontSize: 16, fontWeight: 'bold', padding: 10, backgroundColor: '#f0f0f0' },
conteudo: { padding: 10 },
});