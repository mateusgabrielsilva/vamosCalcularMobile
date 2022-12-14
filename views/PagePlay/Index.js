import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import playStyles from './Styles';

export default function Main({navigation, route}) {


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
  const resultSoma = randomNumberOne + randomNumberTwo

  let dados = []
  for(let i = 0; i <= 4; i++){
    dados.push(
      Math.floor(Math.random() * 100)
    );
  }
  console.log(dados)

  let result1 = dados[Math.floor(Math.random() * 5)]
  let result2 = dados[Math.floor(Math.random() * 5)]
  let result3 = dados[Math.floor(Math.random() * 5)]
  let result4 = dados[Math.floor(Math.random() * 5)]
  let result5 = dados[Math.floor(Math.random() * 5)]

  let botaoAleatorio = [result1, result2, result3, result4, result5, resultSoma]




  console.log()

  


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
          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{botaoAleatorio[Math.floor(Math.random() * 6)]}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{botaoAleatorio[Math.floor(Math.random() * 6)]}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{botaoAleatorio[Math.floor(Math.random() * 6)]}</Text>
          </TouchableOpacity>
        </View>

        <View style={playStyles.buttonResult}>
          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{botaoAleatorio[Math.floor(Math.random() * 5)]}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{resultSoma}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={playStyles.btnResult}>
            <Text style={playStyles.btnText}>{resultSoma}</Text>
          </TouchableOpacity>
        </View>

        
      </View>
      <StatusBar style="light" />
    </View>
  );
}
