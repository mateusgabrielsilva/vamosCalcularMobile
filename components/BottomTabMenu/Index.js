// BottomTabMenu.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BottomTabMenu() {

  const navigation = useNavigation(); // Hook para acessar a navegação
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Menu")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("PagePlay")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: "#282c34",
    borderTopRightRadius: 30,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#F6F5FA",
  },
});
