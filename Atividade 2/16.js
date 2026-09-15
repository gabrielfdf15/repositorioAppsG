import { StyleSheet } from 'react-native';

const s = StyleSheet.create({
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap', // 'nowrap' é o padrão
    gap: 12,          // espaço entre TODOS os filhos
    rowGap: 8,        // só entre linhas
    columnGap: 16,    // só entre colunas
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
});

export default s;
