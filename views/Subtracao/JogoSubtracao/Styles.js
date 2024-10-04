import { StyleSheet } from 'react-native';

const playStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E4FA',
  },
  viewImage: {
    backgroundColor: '#2C2E56',
    width: '100%',
    height: 250,
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
  },
  logo: {
    width: 150,
    height: 150,
  },
  viewOne: {
    width: '100%',
    padding: 15,
    backgroundColor: '#E1E4FA',
    alignItems: 'center',
  },
  placarSoma: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  titleTextPlacar: {
    color: '#27353E',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'ComicNeue_400Regular',
  },
  titleText: {
    color: '#27353E',
    fontSize: 18,
    marginTop: 30,
    marginBottom: 25,
    textAlign: 'center',
    fontFamily: 'ComicNeue_400Regular',
  },
  viewSoma: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSoma: {
    fontSize: 35,
    fontFamily: 'ComicNeue_400Regular',
    fontWeight: 'bold',
  },
  operadorSoma: {
    fontSize: 30,
    fontFamily: 'ComicNeue_400Regular',
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  buttonResult: {
    flexDirection: 'row',
    
  },
  btnResult: {
    width: 80,
    height: 50,
    backgroundColor: '#F6F5FA',
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#000000',
    marginHorizontal: 11,
    marginVertical: 11,
  },
  btnText: {
    fontSize: 25,
    fontFamily: 'ComicNeue_400Regular',
    fontWeight: 'bold',
  },
  textResultadoFinal: {
    fontFamily: 'ComicNeue_700Bold',
    fontSize: 18,
    marginTop: 30,
    color: '#2BFC4F',
  },
  textResultadoFinalErrado: {
    fontFamily: 'ComicNeue_700Bold',
    fontSize: 18,
    marginTop: 10,
    color: '#E01903',
  },
});

export default playStyles