import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
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
    marginTop: 85,
    marginBottom: 99,
    textAlign: 'center',
  },
  titleTextName: {
    fontWeight: 'bold',
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
  },
});

export default mainStyles