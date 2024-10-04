import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, ComicNeue_400Regular, ComicNeue_700Bold } from "@expo-google-fonts/comic-neue";
import homeStyles from "./Styles";

export default function Home({ navigation }) {
  const [nameUser, setName] = useState(null);

  // Chama pagina Menu.JS
  const prox = async () => {

    await AsyncStorage.setItem('nomeUsuario', nameUser);
    
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Menu",
          // Passando parametros para outra tela.
          params: {
            user: nameUser,
          },
        },
      ],
    });
  };

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem('nomeUsuario');
      if (value !== null) {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: "Menu",
              // Passando parametros para outra tela.
              params: {
                user: nameUser,
              },
            },
          ],
        });
      }
    } catch (e) {
      console.error('Erro ao carregar dados', e);
    }
  };

  useEffect(() => {
    loadData(); // Chama loadData quando o componente é montado
  }, []);

  const [fontLoaded] = useFonts({
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={homeStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste o comportamento com base no sistema operacional
    >
      <View style={homeStyles.imageBack}>
        <Image
          source={require("../../assets/logoNovo.png")}
          style={homeStyles.logo}
        />

        <Text style={homeStyles.titleText}>
          Seja bem vindo(a) ao jogo dos cálculos
        </Text>

        <Text style={homeStyles.nameText}>Vamos la. Qual seu nome?</Text>

        <TextInput
          style={homeStyles.textInput}
          placeholder="Escreva seu nome aqui"
          onChangeText={(text) => setName(text)}
        ></TextInput>

        <TouchableOpacity style={homeStyles.btnProx} onPress={prox}>
          <Text style={homeStyles.btnText}>Próximo</Text>
        </TouchableOpacity>

        <StatusBar style="light" />
      </View>
    </KeyboardAvoidingView>
  );
}
