import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native'; // Importe View e StyleSheet
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home/Index';
import Menu from './views/Menu/Index';
import Main from './views/Main/Index';
import PagePlay from './views/PagePlay/Index';
import PreJogo from './views/Subtracao/PreJogo/Index'
import JogoSubtracao from './views/Subtracao/JogoSubtracao/Index'
import BottomTabMenu from './components/BottomTabMenu/Index'; // Importe o BottomTabMenu
import * as SplashScreen from 'expo-splash-screen';

// Mantenha a splash screen visível
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='Home' component={Home}
      />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='Menu' component={Menu}
      />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='Main' component={Main}
      />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='PagePlay' component={PagePlay}
      />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='PreJogo' component={PreJogo}
      />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        name='JogoSubtracao' component={JogoSubtracao}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 4000);
  }, []);

  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <MyStack />
        {/* <BottomTabMenu /> */}
      </NavigationContainer>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2C2E56', // Altere a cor de fundo aqui
//   },
// });
