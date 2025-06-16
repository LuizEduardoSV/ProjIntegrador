import { FontAwesome } from '@expo/vector-icons'; //icone que aparece ao lado do explore
import { Link } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const produtos = [
  { id: '1', nome: 'Produto 1', descricao: 'Descrição do Produto 1', imagem: require('@/assets/images/tijolo.png') },
  { id: '2', nome: 'Produto 2', descricao: 'Descrição do Produto 2', imagem: require('@/assets/images/tijolo.png') },
  { id: '3', nome: 'Produto 3', descricao: 'Descrição do Produto 3', imagem: require('@/assets/images/tijolo.png') },
  { id: '4', nome: 'Produto 4', descricao: 'Descrição do Produto 4', imagem: require('@/assets/images/tijolo.png') },
];

export default function HomeScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Link href="./produto" asChild>
        <TouchableOpacity>
          <Image source={item.imagem} style={styles.imagem} />
          <Text style={styles.texto}>{item.nome}</Text>
          <Text style={styles.descricao}>Descrição do Produto</Text>
          <Text style={styles.descricao}>° blablabla</Text>
          <Text style={styles.descricao}>° blablabla</Text>
          <Text style={styles.descricao}>° blablabla</Text>
          <Text style={styles.descricao}>° blablabla</Text>
        </TouchableOpacity>
      </Link>

      <Link href="./carrinho" asChild>
        <TouchableOpacity style={styles.botaoCarrinho}>
          <FontAwesome name="shopping-cart" size={22} color="#fff" />
          <Text style={styles.textoBotao}>carrinho</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ecological Construction</Text>

      <FlatList
        data={produtos}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFE5D4', alignItems: 'center' },
  titulo: { fontSize: 28, marginTop: 50, marginBottom: 30, fontWeight: '700' },
  lista: { paddingBottom: 120, paddingHorizontal: 20, gap: 30 },
  card: {
    backgroundColor: '#F6C28B',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  imagem: { width: 300, height: 200, resizeMode: 'contain' },
  texto: { marginTop: 15, fontSize: 22, fontWeight: '600' },
  descricao: { fontSize: 16, color: '#333', marginTop: 8, textAlign: 'center' },
  botaoCarrinho: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#FF914D',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  textoBotao: { color: '#fff', fontSize: 18, fontWeight: '600' },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
