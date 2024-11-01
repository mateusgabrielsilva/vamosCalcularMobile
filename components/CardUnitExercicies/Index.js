import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

const CardUnitExercicies = ({ unit, progresso, onPress }) => {

  const [progress, setProgress] = useState(0.4); // Inicia com 40%

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 0.1, 1)); // Incrementa o progresso até 100%
  };

  if (unit == "bloqued") {
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, { justifyContent: "center" }]}
        onPress={onPress}
      >
        <Image source={require("../../assets/secret.png")} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.unitText}>{unit}</Text>
        <Text style={styles.text}>Progresso: {(progress * 100).toFixed(0)}%</Text>
      <Progress.Bar 
        progress={progress} 
        width={50} 
        height={15} // Alterando altura
        color="#ECC055" // Cor personalizada
        borderColor="#1b5e20" // Cor da borda
        borderWidth={2} // Largura da borda
        borderRadius={8} // Arredondando as bordas
        unfilledColor="#e0e0e0" // Cor do espaço vazio
        animationType="spring" // Animação mais suave
      />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#C4C4C4", // cor de fundo do botão
    padding: 15,
    borderRadius: 10,
    width: "45%",
    height: 200,
    justifyContent: "space-between",
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
  },
  iconContainer: {},
  unitText: {
    color: "#000000",
    fontSize: 22,
  },
});

export default CardUnitExercicies;
