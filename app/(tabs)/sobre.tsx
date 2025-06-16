import { View, Text, StyleSheet, Image } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre nós</Text>

      <View style={styles.perfisContainer}>
        <View style={styles.perfil}>
          <Image
            source={require('@/assets/images/alano.png')}
            style={styles.imagem}
          />
          <Text style={styles.nome}>Alano Filho</Text>
        </View>

        <View style={styles.perfil}>
          <Image
            source={require('@/assets/images/luiz.png')}
            style={styles.imagem}
          />
          <Text style={styles.nome}>Luiz Vieira</Text>
        </View>

        <View style={styles.perfil}>
          <Image
            source={require('@/assets/images/arthur.png')}
            style={styles.imagem}
          />
          <Text style={styles.nome}>Arthur Rech</Text>
        </View>
      </View>

      <Text style={styles.descricao}>
        Nossa empresa foi criada com a ideia de melhorar o nosso relacionamento com a natureza
        tendo como produtos tijolos criados com restos de construções para termos um descarte
        melhor dos materiais reciclando-os, mas não apenas isso como também temos a ideia de ajudar
        os artistas a crescer profissionalmente dando oportunidades a todos para fazerem dos nossos
        produtos obras de arte como vasos entre outras coisas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeede',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    top: 50,
  },
  perfisContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  perfil: {
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
    top: 110,
  },
  nome: {
    fontSize: 12,
    fontWeight: '500',
    top: 140,
  },
  descricao: {
    fontSize: 14,
    textAlign: 'justify',
    color: '#333',
    lineHeight: 22,
    top: 220,
    width: 300,
    fontSize: 20,
  },
});
