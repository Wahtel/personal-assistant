import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from 'react-native-paper';
import { Authentication } from "./Authentication";
import { Chat } from "./Chat";

export const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Chat" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}
