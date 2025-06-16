import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ecological Construction</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5D4',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
  },
});
