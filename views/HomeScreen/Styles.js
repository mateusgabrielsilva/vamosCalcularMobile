import { StyleSheet } from "react-native";

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF5F2",
    paddingTop: 30,
  },
  viewSaudacao: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    backgroundColor: "#E5E5E5",
    marginTop: 40,
  },
  textViewSaudacao: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "500",
  },
  viewSaudacaoPontos: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  textViewSaudacaoPontos: {
    fontSize: 24,
    color: "#ECC055",
    fontWeight: "500",
    marginLeft: 7,
  },

  viewScrow: {
    padding: 20,
  },
  viewSoma: {

  },
  viewOperacoes: {
    marginTop: 30,
  },
  viewTitleSoma: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  viewTitleExerciciesSoma: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  textTitleSoma: {
    fontSize: 32,
    fontWeight: "600",
  },
  textExerciciesSoma: {
    fontSize: 18,
    marginLeft: 7,
  },
  cardExercicies: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default homeScreenStyles;
