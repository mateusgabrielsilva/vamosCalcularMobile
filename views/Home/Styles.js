import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1630C2',
  },
  imageBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  titleText: {
    color: '#F6F5FA',
    fontSize: 18,
    marginTop: 70,
    marginBottom: 99,
    fontFamily: 'ComicNeue_400Regular',
  },
  nameText: {
    color: '#F6F5FA',
    fontSize: 18,
    fontFamily: 'ComicNeue_400Regular',
  },
  textInput: {
    width: 290,
    height:50,
    fontSize: 18,
    backgroundColor: '#F6F5FA',
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 29,
    fontFamily: 'ComicNeue_400Regular',
  },
  btnProx: {
    width: 290,
    height: 50,
    backgroundColor: '#1252CC',
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#000000',
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

export default homeStyles