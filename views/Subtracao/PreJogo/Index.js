import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useFonts,
  ComicNeue_400Regular,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";
import Header from "../../../components/Header/Index";
import mainStyles from "./Styles";

export default function PreJogo({ navigation }) {
  const [numberPrimary, setNumberPrimary] = useState(null);
  const [numberSecound, setNumberSecound] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState("");

  // Chama pagina PagePlay.JS
  const prox = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "JogoSubtracao",
          // Passando parametros para outra tela.
          params: {
            numberPrimary: numberPrimary,
            numberSecound: numberSecound,
          },
        },
      ],
    });
  };

  // remover nome

  const removerNome = async () => {
    try {
      await AsyncStorage.removeItem("nomeUsuario");
      console.log("Data removed successfully");
    } catch (e) {
      console.error("Failed to remove the data from storage", e);
    }
  };

  const loadData = async () => {
    const value = await AsyncStorage.getItem("nomeUsuario");
    if (value !== null) {
      setNomeUsuario(value);
    }
  };

  useEffect(() => {
    loadData();
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
      style={mainStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 80}
    >
      <StatusBar style="light" />
      <ScrollView ontentContainerStyle={{ flexGrow: 1 }}>
        <Header localReturn="Menu"/>

        <View style={mainStyles.viewOne}>
          <Text style={mainStyles.titleTipoOperacao}>Legal, vamos subtrair</Text>

          <Text style={mainStyles.titleText}>
            <Text style={mainStyles.titleTextName}> {nomeUsuario}</Text>, agora
            me conte de qual á qual número você quer fazer conta.
          </Text>

          <View style={mainStyles.viewInput}>
            <Text style={mainStyles.textInput}>DE</Text>
            <TextInput
              style={mainStyles.numberInput}
              onChangeText={(text) => setNumberPrimary(text)}
              keyboardType={"number-pad"}
            ></TextInput>
            <Text style={mainStyles.textInputA}>A</Text>
            <TextInput
              style={mainStyles.numberInput}
              onChangeText={(text) => setNumberSecound(text)}
              keyboardType={"number-pad"}
            ></TextInput>
          </View>

          <TouchableOpacity style={mainStyles.btnProx} onPress={prox}>
            <Text style={mainStyles.btnText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
