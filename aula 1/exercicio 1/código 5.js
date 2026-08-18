import { View, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NjcYAErmOy3hEThmzhdBR9b9whRXU27U3xzSdcZ29E65_eCJyqSlavh7&s=10' }}
        style={{ width: 100, height: 100 }}
      />
      <Image
        source={require('./mavie.jpg')}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}