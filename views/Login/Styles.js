import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF5F2',
  },
  imageLoginContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  viewInput:{
    padding: 20,
  },
  input:{
    backgroundColor: "#FFFFFF",
    height: 60,
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
  },
  viewButton:{
    padding: 20,
  },
  buttonCreate: {
    backgroundColor: "#EB9F4A",
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    // Sombra no iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Sombra no Android
    elevation: 5,
  },
  textCreate: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  viewEntrar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  textJaTemConta: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textEntrar: {
    fontWeight: "bold",
    color: "#77B29F",
    marginLeft: 5,
    fontSize: 16,
  },
  imageDinossauro: {
    alignContent: "center",
    alignItems: "center",
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default loginStyles