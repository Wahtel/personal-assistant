import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from 'react-native-paper';
import { Authentication } from "./Authentication";
import { Core } from "./Core";
// import { Chat } from "./Core/Chat";

export const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Core" screenOptions={{
          headerShown: false, contentStyle: {
            backgroundColor: "#0A0C0B"
          }
        }}>
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="Core" component={Core} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
