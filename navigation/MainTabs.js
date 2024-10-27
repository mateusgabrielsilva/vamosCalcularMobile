
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../views/HomeScreen/Index";
import ProfileScreen from "../views/ProfileScreen/Index";

// Telas simuladas
const GoalsScreen = () => <View style={styles.screen}><Text>Goals</Text></View>;
const UsersScreen = () => <View style={styles.screen}><Text>Users</Text></View>;
const SettingsScreen = () => <View style={styles.screen}><Text>Settings</Text></View>;

const Tab = createBottomTabNavigator();

export default function MainTabs({ route }) {
    const { userData } = route.params || {};
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Goals") {
            iconName = focused ? "analytics" : "analytics-outline";
          } else if (route.name === "Users") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#27AE60", // Verde para ícone ativo
        tabBarInactiveTintColor: "gray", // Cinza para ícone inativo
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBarStyle,
          Platform.select({
            ios: { paddingBottom: 0 }, // Padding extra para iOS
          }),
        ],
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} initialParams={{ userData }} />
      <Tab.Screen name="Goals" component={GoalsScreen} />
      <Tab.Screen name="Users" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#E5E5E5",
    borderRadius: 30,
    height: 58,
    marginHorizontal: 20,
    marginBottom: 40,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5, // Sombra no Android
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBF5F2"
  },
});
