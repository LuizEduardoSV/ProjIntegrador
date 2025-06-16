import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const produtosSalvos = [
  { id: '1', nome: 'Produto', imagem: require('@/assets/images/tijolo.png') },
  { id: '2', nome: 'Produto', imagem: require('@/assets/images/tijolo.png') },
  { id: '3', nome: 'Produto', imagem: require('@/assets/images/tijolo.png') },
  { id: '4', nome: 'Produto', imagem: require('@/assets/images/tijolo.png') },
  { id: '5', nome: 'Produto', imagem: require('@/assets/images/tijolo.png') },
  { id: '6', nome: 'Produto', imagem: require('@/assets/images/tijolo.png') },
];

export default function Perfil() {
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" size={80} color="black" style={styles.avatar} />
      <Text style={styles.nome}>Luiz Eduardo</Text>
      <Text style={styles.endereco}>Local para entrega: Rua Claudia Linda, 60</Text>

      <View style={styles.salvosContainer}>
        <FontAwesome name="heart" size={20} color="orangered" />
        <Text style={styles.salvosTexto}>salvos</Text>
      </View>

      <FlatList
        data={produtosSalvos}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.produto}>
            <Image source={item.imagem} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>"{item.nome}"</Text>
          </View>
        )}
        contentContainerStyle={styles.listaProdutos}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d3',
    alignItems: 'center',
    paddingTop: 60,
  },
  avatar: {
    marginBottom: 10,
    top: 30,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 30,
  },
  endereco: {
    textAlign: 'center',
    marginVertical: 10,
    top: 30,
  },
  salvosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    top: 60,
  },
  salvosTexto: {
    marginLeft: 6,
    fontSize: 16,
  },
  listaProdutos: {
    top: 150,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  produto: {
    backgroundColor: '#fcd9b1',
    borderRadius: 8,
    margin: 8,
    padding: 10,
    alignItems: 'center',
  },
  imagemProduto: {
    width: 90,
    height: 50,
    resizeMode: 'contain',
  },
  nomeProduto: {
    marginTop: 5,
    fontSize: 12,
  },
  menu: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
