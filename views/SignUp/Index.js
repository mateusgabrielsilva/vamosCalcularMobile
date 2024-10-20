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

import loginStyles from "./Styles";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [apelido, setApelido] = useState("");
  const [idade, setIdade] = useState(0);
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  // Chama pagina Login
  const loginPage = async () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Login",
          params: {
            user: "",
          },
        },
      ],
    });
  };

  const [fontLoaded] = useFonts({
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={loginStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={loginStyles.imageLoginContainer}>
        <Image source={require("../../assets/logoLogin.png")} />
      </View>

      <View style={loginStyles.viewInput}>
        <TextInput
          style={loginStyles.input}
          placeholder="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={loginStyles.input}
          placeholder="Apelido"
          value={apelido}
          onChangeText={(text) => setApelido(text)}
        />

        <TextInput
          style={loginStyles.input}
          placeholder="Idade"
          keyboardType="numeric"
          value={idade}
          onChangeText={(text) => setIdade(text)}
        />

        <TextInput
          style={loginStyles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />

        <TextInput
          style={loginStyles.input}
          placeholder="Confirma senha"
          value={confirmaSenha}
          onChangeText={(text) => setConfirmaSenha(text)}
        />
      </View>

      <View style={loginStyles.viewButton}>
        <TouchableOpacity style={loginStyles.buttonCreate}>
          <Text style={loginStyles.textCreate}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

      <View style={loginStyles.viewEntrar}>
        <Text style={loginStyles.textJaTemConta}>Já tem conta?</Text>
        <TouchableOpacity onPress={loginPage}>
          <Text style={loginStyles.textEntrar}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
