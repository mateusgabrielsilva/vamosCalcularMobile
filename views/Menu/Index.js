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
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useFonts,
  ComicNeue_400Regular,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";
import CardOperacoes from "../../components/CardOperacoes/Index";
import menuStyles from "./Styles";

export default function Menu({ navigation }) {
  const [nameUser, setName] = useState(null);

  const loadDadosSalvosNoDispositivo = async () => {
    const nomeUsuario = await AsyncStorage.getItem("nomeUsuario");
    if (nomeUsuario !== null) {
      setName(nomeUsuario);
    }
  };

  useEffect(() => {
    loadDadosSalvosNoDispositivo();
  }, []);

  const [fontLoaded] = useFonts({
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  });

  const somar = () => {
    navigation.reset({
        index: 0,
        routes: [
          {
            name: "Main",
            params: {
              user: nameUser,
            },
          },
        ],
      });
  };

  const subtrair = () => {
    navigation.reset({
        index: 0,
        routes: [
          {
            name: "PreJogo",
            params: {
              user: nameUser,
            },
          },
        ],
      });
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={menuStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Ajuste o comportamento com base no sistema operacional
    >
      <View style={menuStyles.containerOne}>
        <Text style={menuStyles.nomeUsuario}>Olá, {nameUser}</Text>
        <Text style={menuStyles.msgSaudacao}>
          Bom ver você por aqui novamente!
        </Text>

        <View style={menuStyles.txtTipoOperacao}>
          <Text style={menuStyles.textoTipoOperacao}>
            Escolha o tipo de operação abaixo
          </Text>
        </View>

        <View style={menuStyles.cardsContainer}>
            <CardOperacoes
                icon={require('../../assets/plus.png')} // caminho da imagem
                text="Adição" // texto que será exibido
                onPress={somar} // função a ser chamada quando o botão for clicado
            />
        </View>

        <View style={menuStyles.cardsContainer}>
            <CardOperacoes
                icon={require('../../assets/remove.png')} // caminho da imagem
                text="Subtração" // texto que será exibido
                onPress={subtrair} // função a ser chamada quando o botão for clicado
            />
        </View>

        <StatusBar style="light" />
      </View>
    </KeyboardAvoidingView>
  );
}
