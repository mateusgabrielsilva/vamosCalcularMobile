import { StyleSheet } from 'react-native';

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2E56',
    // justifyContent: "center",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerOne: {
    padding: 20,
    marginTop: 40,
  },
  nomeUsuario: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'ComicNeue_700Bold',
    fontWeight: 'bold',
  },
  msgSaudacao: {
    color: '#ffffff',
    fontSize: 19,
    fontFamily: 'ComicNeue_400Regular',
    marginTop: 5,
  },
  txtTipoOperacao: {
    marginTop: 47,
    alignItems: 'center',
  },
  textoTipoOperacao: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'ComicNeue_400Regular',
  },
  cardsContainer: {
    marginTop: 47
  },
});

export default menuStyles