import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, ComicNeue_400Regular } from '@expo-google-fonts/comic-neue';
import homeStyles from './Styles';


export default function Home({navigation}) {

  const [nameUser, setName] = useState(null);

  const imageBack = require('../../assets/background.png')

  // Chama pagina Main.JS
  const prox = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Main",
        // Passando parametros para outra tela. 
        params: {
          user: nameUser,
        }, 
      }],
    });
  };

  const [fontLoaded] = useFonts({
    ComicNeue_400Regular,
  });

  if (!fontLoaded) {
    return null;
  }

  return (

    <View style={homeStyles.container}>
      <ImageBackground source={imageBack} resizeMode="cover" style={homeStyles.imageBack}>
        <Image source={require('../../assets/logo.png')}/>

        <Text style={homeStyles.titleText}>Seja bem vindo(a) ao jogo da soma</Text>

        <Text style={homeStyles.nameText}>Vamos la. Qual seu nome?</Text>

        <TextInput style={homeStyles.textInput} placeholder='Escreva seu nome aqui' onChangeText={(text) => setName(text)}></TextInput>

        <TouchableOpacity style={homeStyles.btnProx} onPress={prox}>
          <Text style={homeStyles.btnText}>Próximo</Text>
        </TouchableOpacity>

        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

