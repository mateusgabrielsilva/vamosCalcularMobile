import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

const CardUnitExercicies = ({ unit, progresso, onPress }) => {
  const [progress, setProgress] = useState(0.75);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 0.1, 1)); // Aumenta até 100%
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 0.1, 0)); // Diminui até 0%
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
        <View style={styles.viewCard}>
          <View>
            <Text style={styles.unitText}>{unit}</Text>
          </View>
          <View style={styles.viewProgress}>
            <Text style={styles.text}>
              Progresso: {(progress * 100).toFixed(0)}%
            </Text>
            <Progress.Bar
              progress={progress}
              width={100}
              height={10} // Alterando altura
              color="#41AC78" // Cor personalizada
              borderRadius={8} // Arredondando as bordas
              unfilledColor="#C4C4C4" // Cor do espaço vazio
              animationType="spring" // Animação mais suave
            />
          </View>
        </View>
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
  viewCard: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
});

export default CardUnitExercicies;
