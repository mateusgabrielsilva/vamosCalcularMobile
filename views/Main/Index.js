import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import mainStyles from './Styles';

export default function Main({navigation, route}) {

   // Chama pagina PagePlay.JS
   const prox = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "PagePlay" }],
    });
  };

  // Recebendo valor recebido da outra pagina
  const userName = route.params.user


  return (

    <View style={mainStyles.container}>
      <View style={[mainStyles.viewImage, mainStyles.shadowProp]}>
        <Image source={require('../../assets/logo.png')}/>
      </View>

      <View style={mainStyles.viewOne}>
        <Text style={mainStyles.titleText}>Olá,<Text style={mainStyles.titleTextName}> {userName}</Text>! Agora me conte de qual á qual número você quer fazer conta.</Text>

        <TouchableOpacity style={mainStyles.btnProx} onPress={prox}>
          <Text style={mainStyles.btnText}>Próximo</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
