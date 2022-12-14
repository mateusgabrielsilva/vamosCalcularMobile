import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import playStyles from './Styles';

export default function Main({navigation, route}) {

  const [buttonOne, setButtonOne] = useState(null)


  // Chama pagina PagePlay.JS
  const prox = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };

  // Recebendo valor recebido da outra pagina
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

  var vetor = [result1, result2, result3, result4, result5, resultSoma]

  // Algoritmo de embaralhamento 
  function embaralhar(array) {
    for(var i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
          <TouchableOpacity style={playStyles.btnResult} value="100" onChangeText={(value) => setButtonOne(value)}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[0])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[1])}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[2])}</Text>
          </TouchableOpacity>
        </View>

        <View style={playStyles.buttonResult}>
          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[3])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[4])}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{embaralhar(vetor[5])}</Text>
          </TouchableOpacity>
        </View>

        <Text>{buttonOne}</Text>

        
      </View>
      <StatusBar style="light" />
    </View>
  );
}
