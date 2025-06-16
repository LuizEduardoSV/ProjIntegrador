import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>
      <Text style={styles.texto}>
        Caso queira tirar alguma dúvida, ou queira saber mais sobre nossos serviços não hesite em nos mandar mensagem
      </Text>

      <View style={styles.contatoItem}>
        <FontAwesome name="instagram" size={24} color="#E1306C" />
        <Text style={styles.contatoTexto}>@ALN.construções</Text>
      </View>

      <View style={styles.contatoItem}>
        <FontAwesome name="envelope" size={24} color="#0072C6" />
        <Text style={styles.contatoTexto}>ALNconstruções@gmail.com</Text>
      </View>

      <View style={styles.contatoItem}>
        <FontAwesome name="facebook" size={24} color="#3b5998" />
        <Text style={styles.contatoTexto}>@ALN.construções</Text>
      </View>

      <View style={styles.contatoItem}>
        <FontAwesome name="whatsapp" size={24} color="#25D366" />
        <Text style={styles.contatoTexto}>(47) 9 12763398</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d3',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
    titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    top: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 23,
    marginBottom: 30,
    width: 350,
    top: 150,
  },
  contatoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 10,
    marginLeft: 10,
    left: 80,
    top: 180,
  },
  contatoTexto: {
    marginLeft: 10,
    fontSize: 16,
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

