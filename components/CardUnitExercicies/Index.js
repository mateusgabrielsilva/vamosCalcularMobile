import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CardUnitExercicies = ({ unit, progress, onPress }) => {
  if (unit == "bloqued") {
    return (
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          { justifyContent: "center" },
        ]}
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#C4C4C4", // cor de fundo do botão
    padding: 10,
    borderRadius: 10,
    width: "50%",
    height: 187,
    margin: 8,
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
    fontSize: 26,
  },
});

export default CardUnitExercicies;
