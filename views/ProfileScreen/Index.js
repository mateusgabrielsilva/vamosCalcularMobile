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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, ComicNeue_400Regular, ComicNeue_700Bold } from "@expo-google-fonts/comic-neue";
import profileScreenStyles from "./Styles";

export default function ProfileScreen({ navigation }) {

  return (
    <KeyboardAvoidingView
      style={profileScreenStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste o comportamento com base no sistema operacional
    >
      <View>
        <Text>Profile Screen</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
