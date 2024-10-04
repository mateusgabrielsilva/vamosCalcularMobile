import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2E56',
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 80,
  },
  titleText: {
    color: '#F6F5FA',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'ComicNeue_700Bold',
    fontWeight: '600',
  },
  nameText: {
    color: '#F6F5FA',
    fontSize: 18,
    fontFamily: 'ComicNeue_400Regular',
    marginBottom: 20,
  },
  textInput: {
    width: 290,
    height:47,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#F6F5FA',
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 29,
    fontFamily: 'ComicNeue_400Regular',
    color: '#2C2E56'
  },
  btnProx: {
    width: 290,
    height: 50,
    backgroundColor: '#F4784A',
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#000000',
  },
  btnText: {
    color: '#2C2E56',
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    fontFamily: 'ComicNeue_400Regular',
  },

});

export default homeStyles