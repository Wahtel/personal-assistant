import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from './SettingsScreen';
import TermsOfUseScreen from './TermsOfUseScreen';

const SettingsStack = createNativeStackNavigator();

export default function ChatNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsMainScreen" component={SettingsScreen} />
      <SettingsStack.Screen name="TermsOfUseScreen" component={TermsOfUseScreen} />
    </SettingsStack.Navigator>
  );
};