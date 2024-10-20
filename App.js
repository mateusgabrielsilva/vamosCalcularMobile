import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./views/Login/Index";
import SignUp from "./views/SignUp/Index";
import * as SplashScreen from "expo-splash-screen";

// Mantenha a splash screen visível
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "",
          headerTransparent: true,
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />

      <Stack.Screen
        options={{
          title: "",
          headerTransparent: true,
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
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
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
