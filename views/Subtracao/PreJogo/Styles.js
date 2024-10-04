import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
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
  titleTipoOperacao: {
    color: '#27353E',
    fontSize: 26,
    marginTop: 60,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'ComicNeue_700Bold',
  },
  titleText: {
    color: '#27353E',
    fontSize: 18,
    marginBottom: 74,
    textAlign: 'center',
    fontFamily: 'ComicNeue_400Regular',
  },
  titleTextName: {
    fontFamily: 'ComicNeue_700Bold',
    fontWeight: 'bold',
  },
  viewInput: {
    flexDirection: 'row',
    marginBottom: 74,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'ComicNeue_400Regular',
  },
  textInput: {
    fontSize: 20,
    fontFamily: 'ComicNeue_400Regular',
    fontWeight: 'bold',
    marginRight: 19,
    fontFamily: 'ComicNeue_400Regular',
  },
  textInputA: {
    fontSize: 20,
    fontFamily: 'ComicNeue_400Regular',
    fontWeight: 'bold',
    marginLeft: 19,
    marginRight: 19,
  },
  numberInput: {
    backgroundColor: '#F6F5FA',
    width: 80,
    height: 50,
    borderRadius: 8,
    color: '#27353E',
    textAlign: 'center',
    fontFamily: 'ComicNeue_400Regular',
  },
  btnProx: {
    width: 290,
    height: 50,
    backgroundColor: '#2C2E56',
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
  },
  btnText: {
    
    color: '#F6F5FA',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    fontFamily: 'ComicNeue_400Regular',
  },
});

export default mainStyles