# Respostas — Navegação de Telas e Rotas (React Native)

## Exercício 1 — Instalação e primeira navegação (`exercicio1.js`)

**1.a.** O `Stack` é criado fora do componente, o `Stack.Navigator` fica dentro do `NavigationContainer` e a tela `TelaInicial` é registrada com o nome `Inicio`.

```jsx
const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator initialRouteName='Inicio'>
    <Stack.Screen name='Inicio' component={TelaInicial} options={{ title: 'Home' }} />
    <Stack.Screen name='Detalhes' component={TelaDetalhes} options={{ title: 'Detalhes do Item' }} />
  </Stack.Navigator>
</NavigationContainer>
```

**1.b.** `navigation.navigate('Detalhes')` vai para a segunda tela e `navigation.goBack()` volta. As duas telas recebem `{ navigation }` como prop.

**1.c.** `options={{ title }}` muda o título do header de cada tela e `initialRouteName` define qual tela abre primeiro.

## Exercício 2 — Parâmetros (`exercicio2.js`)

**2.a.** O nome digitado vai no segundo argumento do `navigate` e a tela de destino lê em `route.params`.

```jsx
navigation.navigate('Detalhes', { nome: nomeDigitado });
const { nome } = route.params;
```

**2.b.** Com vários campos, o objeto leva todos e a desestruturação lê tudo de uma vez.

```jsx
navigation.navigate('Detalhes', { nome, email, idade });
const { nome, email, idade } = route.params;
```

**2.c.** A `FlatList` usa `data`, `keyExtractor` (sem ele o console reclama) e `renderItem` com um `TouchableOpacity` que navega para `Produto` com nome, preço e descrição. O preço usa `item.preco.toFixed(2)`.

```jsx
<FlatList
  data={produtos}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Produto', {
      nome: item.nome, preco: item.preco, descricao: item.descricao,
    })}>
      <Text>{item.nome} — R$ {item.preco.toFixed(2)}</Text>
    </TouchableOpacity>
  )}
/>
```

**2.d.** O encadeamento opcional evita erro quando a tela abre sem parâmetros. A tela `Notificacoes` não recebe nada e abre normalmente.

```jsx
const pedidoId = route.params?.pedidoId || 'N/A';
```

## Exercício 3 — Abas (`exercicio3.js`)

**3.a.** Troca o Stack por `createBottomTabNavigator()` com as telas Home, Busca e Perfil.

**3.b.** As cores ficam em `screenOptions` do `Tab.Navigator`. Cada aba tem `tabBarLabel` em português e um `tabBarIcon` próprio.

```jsx
<Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#28a745', tabBarInactiveTintColor: '#999' }}>
  <Tab.Screen name='Home' component={TelaHome}
    options={{ tabBarLabel: 'Início', tabBarIcon: () => <Text>H</Text> }} />
</Tab.Navigator>
```

**3.c. Resposta:** sim, nos dois casos. O contador da Home e o texto da Busca mantêm o valor quando você volta para a aba, porque cada aba continua montada com o próprio estado. O Tab Navigator não desmonta a tela ao trocar de aba.

## Exercício 4 — Menu lateral (`exercicio4.js`)

**4.a.** `createDrawerNavigator()` com Home (título 'Início'), Config (título 'Configurações') e Sobre. O gesto de deslizar da borda esquerda abre o menu. O arquivo precisa começar com `import 'react-native-gesture-handler'`.

**4.b.** A mesma tela se comporta de forma diferente conforme a origem. Pelo menu, `route.params` é `undefined` e aparece 'claro'. Pelo botão da Home, chega `{ tema: 'escuro' }`.

```jsx
navigation.navigate('Config', { tema: 'escuro' });
const tema = route.params?.tema || 'claro';
```

## Exercício 5 — Stack dentro de Tab (`exercicio5.js`)

**5.a.** `HomeStack()` retorna um `Stack.Navigator` e a aba Home usa `component={HomeStack}`. Dentro da aba existe uma pilha, então dá para ir para outra tela e voltar.

**5.b.** `screenOptions={{ headerShown: false }}` no `Tab.Navigator` esconde o header da aba, e sobra só o header do Stack.

**Resposta — por que apareciam dois headers?** O Stack estava dentro da aba Home. O Tab desenhava um header para a aba e o Stack desenhava outro para a tela, então os dois apareciam empilhados.

**Resposta — diferença entre os headers:** o header do Tab pertence à aba, mostra o nome dela e não tem botão de voltar. O header do Stack pertence à pilha, muda a cada tela e mostra o botão de voltar automaticamente.

**5.c.** A aba Home tem um Stack com `Lista` (`FlatList` de cinco filmes) e `Filme` (recebe `route.params`). Cada item navega passando `titulo` e `ano`. Na aba Perfil, o botão navega entre abas com a rota aninhada:

```jsx
navigation.navigate('HomeTab', {
  screen: 'Filme',
  params: { titulo: 'Matrix', ano: 1999 },
});
```

## Exercício 6 — App de receitas (`exercicio6.js`)

A aba Receitas contém um Stack com a `FlatList` de receitas e a tela de detalhe (nome, tempo de preparo e ingredientes). A aba Favoritos mostra uma receita fixa, reaproveitando a tela de detalhe. O `Tab.Navigator` usa `headerShown: false`, então o header aparece só uma vez nas telas do Stack. A aba Favoritos liga o próprio header com `options={{ headerShown: true }}`.

## Exercício 7 — App de contatos (`exercicio7.js`)

A estrutura é Tab, depois Stack, depois Drawer:

1. A aba **Contatos** contém um Stack com duas telas: `Menu` (o Drawer) e `Detalhe`.
2. O Drawer tem as opções **Todos** e **Favoritos**, que usam a mesma lista com um filtro.
3. Ao clicar num contato, `navigation.navigate('Detalhe', { nome, telefone, email })` abre o detalhe no Stack pai com os dados corretos.
4. A aba **Sobre** é uma tela estática.

O header do Stack fica escondido na tela `Menu`, porque o Drawer já tem o próprio header.

## Exercício 8 — Corrigindo bugs (`exercicio8.js`)

| Bug | Correção |
| --- | --- |
| Faltavam os imports (`NavigationContainer`, `Text`, `TouchableOpacity`, `createNativeStackNavigator`) | Importar todos no topo do arquivo |
| `Stack.Navigator` sem `NavigationContainer` | Envolver o navegador no `NavigationContainer` |
| `navigate('TelaB')`, mas a rota registrada se chama `'B'` | Usar `navigation.navigate('B')` |
| `TelaB` lê `route.params.nome`, mas é aberta sem params e quebra | Usar `route.params?.nome \|\| 'Sem nome'` |
