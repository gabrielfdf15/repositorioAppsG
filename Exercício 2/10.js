import { StyleSheet } from 'react-native';

const s = StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: '700',   // '100'..'900' | 'bold'
    lineHeight: 28,      // em dp, não múltiplo
    letterSpacing: 0.4,
  },
  corpo: {
    fontSize: 15,
    lineHeight: 22,
    color: '#97A3B8',
    textAlign: 'left',   // center | right | justify
  },
});

export default s;
