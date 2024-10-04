import React from "react";
import { View, Image, StyleSheet, Alert, BackHandler } from "react-native";
import {
  useFonts,
  ComicNeue_400Regular,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const Header = ({ localReturn, exit }) => {
  const navigation = useNavigation(); // Hook para acessar a navegação
  const [fontLoaded] = useFonts({
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  });

  const exitApp = () => {
    Alert.alert(
      "Sair do App",
      "Você tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => BackHandler.exitApp() // Fecha o app no Android
        }
      ],
      { cancelable: false }
    );
  };

  const prox = async () => {

    navigation.reset({
      index: 0,
      routes: [
        {
          name: localReturn
        },
      ],
    });
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonArrowLeft}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="#F6F5FA"
          onPress={prox}
        />
        <Ionicons name="exit-outline" size={30} color="#F6F5FA" onPress={exitApp} />
      </View>
      <View style={styles.image}>
        <Image
          source={require("../../assets/logoNovo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2E56",
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 250,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
  },
  buttonArrowLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 20,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 130,
    height: 130,
  },
});

export default Header;
