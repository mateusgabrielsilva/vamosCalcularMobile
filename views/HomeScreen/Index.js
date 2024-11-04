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
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useFonts,
  ComicNeue_400Regular,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";
import CardUnitExercicies from "../../components/CardUnitExercicies/Index";
import homeScreenStyles from "./Styles";

export default function HomeScreen({ navigation, route }) {
  const { userData } = route.params || {};

  // Calculo de soma
  const maxExercicies = 60;
  const exerciciesOk = 18;

  // Calculo de subtração
  const maxSubtracao = 60;
  const acertosSubtracao = 0;

  // Calculo de multiplicacao
  const maxMultiplicacao = 60;
  const acertosMultiplicacao = 0;

  // Calculo de divisao
  const maxDivisao = 60;
  const acertosDivisao = 0;

  return (
    <KeyboardAvoidingView
      style={homeScreenStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Ajuste o comportamento com base no sistema operacional
    >
      <View style={homeScreenStyles.viewSaudacao}>
        <Text style={homeScreenStyles.textViewSaudacao}>
          Olá, {userData.apelido}
        </Text>
        <View style={homeScreenStyles.viewSaudacaoPontos}>
          <Image source={require("../../assets/coroa.png")} />
          <Text style={homeScreenStyles.textViewSaudacaoPontos}>
            {userData.pontos}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={homeScreenStyles.viewScrow}>
          {/* Card Soma */}
          <View style={homeScreenStyles.viewOperacoes}>
            <View style={homeScreenStyles.viewTitleSoma}>
              <Text style={homeScreenStyles.textTitleSoma}>Soma</Text>

              <View style={homeScreenStyles.viewTitleExerciciesSoma}>
                <Image
                  source={require("../../assets/coroa.png")}
                  style={{ height: 21, width: 25 }}
                />
                <Text style={homeScreenStyles.textExerciciesSoma}>
                  {exerciciesOk}/{maxExercicies}
                </Text>
              </View>
            </View>

            <View style={homeScreenStyles.cardExercicies}>
              <CardUnitExercicies unit="Unidade 1" />
              <CardUnitExercicies unit="bloqued" />
            </View>

          </View>

          {/* Card Subtração */}
          <View style={homeScreenStyles.viewOperacoes}>
            <View style={homeScreenStyles.viewTitleSoma}>
              <Text style={homeScreenStyles.textTitleSoma}>Subtração</Text>

              <View style={homeScreenStyles.viewTitleExerciciesSoma}>
                <Image
                  source={require("../../assets/coroa.png")}
                  style={{ height: 21, width: 25 }}
                />
                <Text style={homeScreenStyles.textExerciciesSoma}>
                  {acertosSubtracao}/{maxSubtracao}
                </Text>
              </View>
            </View>

            <View style={homeScreenStyles.cardExercicies}>
              <CardUnitExercicies unit="bloqued" />
              <CardUnitExercicies unit="bloqued" />
            </View>
          </View>

          {/* Card Multiplicação */}
          <View style={homeScreenStyles.viewOperacoes}>
            <View style={homeScreenStyles.viewTitleSoma}>
              <Text style={homeScreenStyles.textTitleSoma}>Multiplicação</Text>

              <View style={homeScreenStyles.viewTitleExerciciesSoma}>
                <Image
                  source={require("../../assets/coroa.png")}
                  style={{ height: 21, width: 25 }}
                />
                <Text style={homeScreenStyles.textExerciciesSoma}>
                  {acertosMultiplicacao}/{maxMultiplicacao}
                </Text>
              </View>
            </View>

            <View style={homeScreenStyles.cardExercicies}>
              <CardUnitExercicies unit="bloqued" />
              <CardUnitExercicies unit="bloqued" />
            </View>
          </View>

          {/* Card Divisão */}
          <View style={homeScreenStyles.viewOperacoes}>
            <View style={homeScreenStyles.viewTitleSoma}>
              <Text style={homeScreenStyles.textTitleSoma}>Divisão</Text>

              <View style={homeScreenStyles.viewTitleExerciciesSoma}>
                <Image
                  source={require("../../assets/coroa.png")}
                  style={{ height: 21, width: 25 }}
                />
                <Text style={homeScreenStyles.textExerciciesSoma}>
                  {acertosDivisao}/{maxDivisao}
                </Text>
              </View>
            </View>

            <View style={homeScreenStyles.cardExercicies}>
              <CardUnitExercicies unit="bloqued" />
              <CardUnitExercicies unit="bloqued" />
            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
