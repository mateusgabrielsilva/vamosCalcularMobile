import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import {
  useFonts,
  ComicNeue_400Regular,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";
import playStyles from "./Styles";
import Header from "../../../components/Header/Index";
//import Header from "../../components/Header/Index";

export default function JogoSubtracao({ navigation, route }) {
  const [randomNumberOne, setRandomNumberOne] = useState(null);
  const [randomNumberTwo, setRandomNumberTwo] = useState(null);
  const [resultSub, setResultSub] = useState(null); // Mudou para resultado da subtração
  const [vetor, setVetor] = useState([]);

  const numberPrimary = route.params.numberPrimary;
  const numberSecound = route.params.numberSecound;

  // Função para gerar números aleatórios e calcular resultados
  function generateNewNumbers() {
    // Gera dois números aleatórios
    const newRandomNumberOne = getRandomInt(numberPrimary, numberSecound);
    const newRandomNumberTwo = getRandomInt(numberPrimary, numberSecound);

    // Aqui usamos a subtração em vez da soma
    const newResultSub = newRandomNumberOne - newRandomNumberTwo;

    // Garantir que o resultado não seja menor ou igual a zero
    if (newResultSub <= 0) {
      return generateNewNumbers(); // Chama novamente se o resultado for inválido
    }

    const newResults = [];
    for (let i = 0; i < 5; i++) {
      newResults.push(getRandomNearResult(newResultSub, 5));
    }

    const newVetor = [...newResults, newResultSub];
    embaralhar(newVetor);

    // Atualiza estados com novos números e resultados
    setRandomNumberOne(newRandomNumberOne);
    setRandomNumberTwo(newRandomNumberTwo);
    setResultSub(newResultSub); // Muda para usar a subtração
    setVetor(newVetor);
  }

  // Inicializa números aleatórios
  React.useEffect(() => {
    generateNewNumbers();
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomNearResult(correctResult, variation) {
    const randomOffset =
      Math.floor(Math.random() * (2 * variation + 1)) - variation;
    return correctResult + randomOffset;
  }

  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [resultadoFinal, setResultadoFinal] = useState(null);
  const [resultadoFinalErrado, setResultadoFinalErrado] = useState(null);
  const [count, setCount] = useState(0);
  const [countErro, setCountErro] = useState(0);

  // Estado para armazenar a cor de cada botão
  const [buttonColors, setButtonColors] = useState(Array(6).fill("#F6F5FA"));

  function result(valor, index) {
    if (valor == resultSub) {
      setResultadoFinal("Parabéns! Você acertou o resultado.");
      setButtonColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[index] = "green"; // Cor verde para resposta correta
        return newColors;
      });
      setCount(count + 1);
    } else {
      setResultadoFinalErrado("Poxa, infelizmente não é esse o resultado correto.");
      setButtonColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[index] = "red"; // Cor vermelha para resposta errada
        return newColors;
      });
      setCountErro(countErro + 1);
    }

    // Adiciona um atraso de 3 segundos antes de gerar uma nova conta e resetar os resultados
    setTimeout(() => {
      setResultadoFinal("");
      setResultadoFinalErrado("");
      setButtonColors(Array(6).fill("#F6F5FA")); // Resetar as cores após 3 segundos

      // Gera novos números e resultados aleatórios
      generateNewNumbers();
    }, 3000);
  }

  const [fontLoaded] = useFonts({
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={playStyles.container}>
      <StatusBar style="light" />
      <Header localReturn="PreJogo" />
      <View style={playStyles.viewOne}>
        <View style={playStyles.placarSoma}>
          <Text style={playStyles.titleTextPlacar}>Acertos: {count}</Text>
          <Text style={playStyles.titleTextPlacar}>Erros: {countErro}</Text>
        </View>

        <Text style={playStyles.titleText}>Vamos nessa, quanto é?</Text>

        <View style={playStyles.viewSoma}>
          <Text style={playStyles.textSoma}>{randomNumberOne}</Text>
          <Text style={playStyles.operadorSoma}>-</Text>
          <Text style={playStyles.textSoma}>{randomNumberTwo}</Text>
        </View>

        {/* Primeira linha com 3 botões */}
        <View style={playStyles.buttonResult}>
          {vetor.slice(0, 3).map((valor, index) => (
            <TouchableOpacity
              key={index}
              style={[playStyles.btnResult, { backgroundColor: buttonColors[index] }]} // Define a cor do botão
              onPress={() => result(valor, index)} // Passa o índice para controlar a cor
            >
              <Text style={playStyles.btnText}>{valor}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Segunda linha com 3 botões */}
        <View style={playStyles.buttonResult}>
          {vetor.slice(3, 6).map((valor, index) => (
            <TouchableOpacity
              key={index + 3}
              style={[playStyles.btnResult, { backgroundColor: buttonColors[index + 3] }]} // Define a cor do botão
              onPress={() => result(valor, index + 3)} // Passa o índice para controlar a cor
            >
              <Text style={playStyles.btnText}>{valor}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={playStyles.textResultadoFinal}>{resultadoFinal}</Text>
        <Text style={playStyles.textResultadoFinalErrado}>
          {resultadoFinalErrado}
        </Text>
      </View>
    </View>
  );
}
