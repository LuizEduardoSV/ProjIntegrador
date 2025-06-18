import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ecological Construction</Text>

      <Image source={require('@/assets/images/vaso-retangular.jpg')} style={styles.imagemHorizontal} />

      <View style={styles.imagemLinha}>
        <Image source={require('@/assets/images/vaso-quadrado.jpg')} style={styles.imagemQuadrada} />
        <Image source={require('@/assets/images/vaso-quadrado2.jpg')} style={styles.imagemQuadrada} />
      </View>

      <Image source={require('@/assets/images/tijolo-ilus-retangulo.jpg')} style={styles.imagemHorizontal} />

      <View style={styles.imagemLinha}>
        <Image source={require('@/assets/images/tijolo-ilus-quadrado.webp')} style={styles.imagemQuadrada} />
        <Image source={require('@/assets/images/tijolo-ilus-quadrado2.jpg')} style={styles.imagemQuadrada} />
      </View>

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
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#2E1F0F',
    top: 10,
  },
  imagemHorizontal: {
    width: '90%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
    top: 30,
  },
  imagemLinha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 80,
  },
  imagemQuadrada: {
    width: '45%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    top: 65,
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
