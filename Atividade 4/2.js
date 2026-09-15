import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const CartaoProduto = ({ nome, preco, disponivel }) => {
return (
<View style={estilos.cartao}>
<Text style={estilos.nome}>{nome}</Text>
<Text>R$ {preco.toFixed(2)}</Text>
<Text>{disponivel ? ' Em estoque' : ' Esgotado'}</Text>
</View>
);
};
export default function App() {
return (
<View style={estilos.container}>
<CartaoProduto nome="Teclado" preco={149.9} disponivel={true} />
<CartaoProduto nome="Mouse" preco={79.5} disponivel={false} />
</View>
);
}
const estilos = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', padding: 20 },
cartao: { padding: 16, marginBottom: 12, backgroundColor: '#f5f5f5', borderRadius: 8 },
nome: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
});