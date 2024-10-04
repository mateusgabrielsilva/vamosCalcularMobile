import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    useFonts,
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  } from "@expo-google-fonts/comic-neue";

const CardOperacoes = ({ icon, text, onPress }) => {

    const [fontLoaded] = useFonts({
        ComicNeue_400Regular,
        ComicNeue_700Bold,
    });

    if (!fontLoaded) {
        return null;
    }

    return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7D7D89', // cor de fundo do botão
    padding: 10,
    borderRadius: 10,
    height: 88,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: '#E8F8FF', // cor de fundo do ícone
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 10,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
  buttonText: {
    color: '#2C2E56',
    fontSize: 26,
    fontFamily: 'ComicNeue_700Bold',
  },
});

export default CardOperacoes;
