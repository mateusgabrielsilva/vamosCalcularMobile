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
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../../services/api";
import {
  useFonts,
  ComicNeue_400Regular,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";

import loginStyles from "./Styles";

export default function Login({ navigation }) {
  const [apelido, setApelido] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  // Chama Api de Login
  const loginApi = async () => {
    setLoading(true);
    try {
      const userData = { apelido: apelido, senha: senha };
      const response = await loginUser(userData);

      if (response.status == 200) {
        Alert.alert(
          "Sucesso",
          `Usuário logado com sucesso, seu Id é ${response.data.id}`,
          [{ text: "Ok" }]
        );
      } else if (response.status == 404) {
        Alert.alert(
          "Erro",
          `Usuário não encontrado na base.`,
          [{ text: "Ok" }]
        );
      } else {
        Alert.alert(
          "Erro",
          'Algo deu errado. Por favor, tente novamente.',
          [{ text: "Ok" }]
        );
      }
    } catch (error) {
      console.error(
        error.response ? error.response.status : "Erro desconhecido"
      );
    } finally {
      setLoading(false);
    }
  };

  // Chama pagina SignUp
  const signUp = async () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "SignUp",
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

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={loginStyles.loader}
      />
    );
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
          placeholder="Apelido"
          value={apelido}
          onChangeText={(text) => setApelido(text)}
        />

        <TextInput
          style={loginStyles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      <View style={loginStyles.viewButton}>
        <TouchableOpacity style={loginStyles.buttonCreate} onPress={loginApi}>
          <Text style={loginStyles.textCreate}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={loginStyles.viewEntrar}>
        <Text style={loginStyles.textJaTemConta}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={signUp}>
          <Text style={loginStyles.textEntrar}>Criar agora</Text>
        </TouchableOpacity>
      </View>

      <View style={loginStyles.imageDinossauro}>
        <Image
          source={require("../../assets/dinossauro.png")}
          resizeMode="contain"
        />
      </View>
    </KeyboardAvoidingView>
  );
}
