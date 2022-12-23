import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, ComicNeue_400Regular, ComicNeue_700Bold } from '@expo-google-fonts/comic-neue';
import mainStyles from './Styles';

export default function Main({navigation, route}) {

  const [numberPrimary, setNumberPrimary] = useState(null)
  const [ numberSecound, setNumberSecound] = useState(null)

  // Chama pagina PagePlay.JS
  const prox = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "PagePlay",
      // Passando parametros para outra tela. 
      params: {
        numberPrimary: numberPrimary,
        numberSecound: numberSecound,
      },
     }],
    });
  };

  // Recebendo valor recebido da outra pagina
  const userName = route.params.user

  const [fontLoaded] = useFonts({
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }


  return (

    <View style={mainStyles.container}>
      <View style={[mainStyles.viewImage, mainStyles.shadowProp]}>
        <Image source={require('../../assets/logo.png')}/>
      </View>

      <View style={mainStyles.viewOne}>
        <Text style={mainStyles.titleText}>Olá,<Text style={mainStyles.titleTextName}> {userName}</Text>! Agora me conte de qual á qual número você quer fazer conta.</Text>

        <View style={mainStyles.viewInput}>
          <Text style={mainStyles.textInput}>DE</Text>
          <TextInput style={mainStyles.numberInput} onChangeText={(text) => setNumberPrimary(text)} keyboardType={'number-pad'}></TextInput>
          <Text style={mainStyles.textInputA}>A</Text>
          <TextInput style={mainStyles.numberInput} onChangeText={(text) => setNumberSecound(text)} keyboardType={'number-pad'}></TextInput>
        </View>

        <TouchableOpacity style={mainStyles.btnProx} onPress={prox}>
          <Text style={mainStyles.btnText}>Próximo</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
