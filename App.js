import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home/Index';
import Main from './views/Main/Index';
import PagePlay from './views/PagePlay/Index';


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
