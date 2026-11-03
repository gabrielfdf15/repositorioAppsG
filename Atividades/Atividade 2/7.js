import { StyleSheet, Platform } from 'react-native';

const s = StyleSheet.create({
  card: {
    backgroundColor: '#1B2130',
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: { elevation: 4 },
    }),
  },
});

export default s;
