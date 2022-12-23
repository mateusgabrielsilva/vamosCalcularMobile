import { StyleSheet } from 'react-native';

const playStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E4FA',
  },
  viewImage: {
    backgroundColor: '#1630C2',
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  shadowProp: {
    elevation: 20,
    shadowColor: '#000000',
  },
  viewOne: {
    width: '100%',
    padding: 15,
    backgroundColor: '#E1E4FA',
    alignItems: 'center',
  },
  titleText: {
    color: '#27353E',
    fontSize: 18,
    marginTop: 55,
    marginBottom: 25,
    textAlign: 'center',
    fontFamily: 'ComicNeue_400Regular',
  },
  viewSoma: {
    flexDirection: 'row',
    marginBottom: 55,
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
});

export default playStyles