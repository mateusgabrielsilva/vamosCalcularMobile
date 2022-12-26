import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, ComicNeue_400Regular, ComicNeue_700Bold } from '@expo-google-fonts/comic-neue';
import playStyles from './Styles';

export default function Main({navigation, route}) {

  // Chama alguma pagina
  const prox = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };

  // Recebendo dados da pagina Main
  const numberPrimary = route.params.numberPrimary
  const numberSecound = route.params.numberSecound

  // Gerando numero inteiro aleatório entre dois valores
  function getRandomIntOne(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Gerando numero inteiro aleatório entre dois valores
  function getRandomIntTwo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const randomNumberOne =  getRandomIntOne(numberPrimary, numberSecound)
  const randomNumberTwo =  getRandomIntTwo(numberPrimary, numberSecound)
  


  const result1 = Math.floor(Math.random() * (numberSecound - numberPrimary + 5))
  const result2 = Math.floor(Math.random() * (numberSecound - numberPrimary + 5))
  const result3 = Math.floor(Math.random() * (numberSecound - numberPrimary + 5))
  const result4 = Math.floor(Math.random() * (numberSecound - numberPrimary + 5))
  const result5 = Math.floor(Math.random() * (numberSecound - numberPrimary + 5))
  const resultSoma = randomNumberOne + randomNumberTwo

  // Algoritmo de embaralhamento 
  function embaralhar(array) {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  var vetor = [result1, result2, result3, result4, result5, resultSoma];

  console.log(embaralhar(vetor))

  // Verifica resultado do botao clicado
  function result(valor) {
    
    var valorParametro = valor
  
    if(valor == resultSoma) {
      setResultadoFinal('Parabéns! Você acertou o resultado.')
      setTimeout(function(){
        setResultadoFinal('')
      }, 3000);
      setCount(prevCount => prevCount + 1)
    }else {
      setResultadoFinalErrado('Poxa, infelizmente não é esse o resultado correto.')
      setTimeout(function(){
        setResultadoFinalErrado('')
      }, 3000);
    }
    
    return valorParametro
  }

  var [resultadoFinal, setResultadoFinal] = useState(null)
  var [resultadoFinalErrado, setResultadoFinalErrado] = useState(null)

  const [count, setCount] = useState(0)
  console.log(count)

  const [fontLoaded] = useFonts({
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }


  return (

    <View style={playStyles.container}>
      <View style={[playStyles.viewImage, playStyles.shadowProp]}>
        <Image source={require('../../assets/logo.png')}/>
      </View>

      <View style={playStyles.viewOne}>
        <Text style={playStyles.titleText}>Vamos nessa, quanto é?</Text>

        <View style={playStyles.viewSoma}>
          <Text style={playStyles.textSoma}>{randomNumberOne}</Text>
          <Text style={playStyles.operadorSoma}>+</Text>
          <Text style={playStyles.textSoma}>{randomNumberTwo}</Text>
        </View>

        <View style={playStyles.buttonResult}>
          <TouchableOpacity style={playStyles.btnResult} onPress={function() {result(embaralhar(vetor[0]))}}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[0])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={playStyles.btnResult} onPress={function() {result(embaralhar(vetor[1]))}}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[1])}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={playStyles.btnResult} onPress={function() {result(embaralhar(vetor[2]))}}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[2])}</Text>
          </TouchableOpacity>
        </View>

        <View style={playStyles.buttonResult}>
          <TouchableOpacity style={playStyles.btnResult} onPress={function() {result(embaralhar(vetor[3]))}}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[3])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={playStyles.btnResult} onPress={function() {result(embaralhar(vetor[4]))}}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[4])}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={playStyles.btnResult} onPress={function() {result(embaralhar(vetor[5]))}}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[5])}</Text>
          </TouchableOpacity>
        </View>

        <Text style={playStyles.textResultadoFinal}>{resultadoFinal}</Text>
        <Text style={playStyles.textResultadoFinalErrado}>{resultadoFinalErrado}</Text>
        
      </View>
      <StatusBar style="light" />
    </View>
  );
}