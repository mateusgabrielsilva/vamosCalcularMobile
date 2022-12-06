import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home/Index';
import Main from './views/Main/Index';


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
          title: 'Ola',
          headerTransparent: true,
          headerShown: false,
          headerStyle: {
            backgroundColor: '#1630C2',
            height: 200,
          },
        }}
        name='Main' component={Main}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}
