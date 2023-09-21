import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from './SettingsScreen';
import TermsOfUseScreen from './TermsOfUseScreen';
import PrivacyPolicyScreen from "./PrivacyPolicyScreen";

const SettingsStack = createNativeStackNavigator();

export default function SettingsNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsMainScreen" component={SettingsScreen} />
      <SettingsStack.Screen name="TermsOfUseScreen" component={TermsOfUseScreen} />
      <SettingsStack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
    </SettingsStack.Navigator>
  );
};