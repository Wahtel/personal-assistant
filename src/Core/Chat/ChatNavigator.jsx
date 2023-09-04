import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatContainer as Chat } from "./ChatContainer";

const ChatStack = createNativeStackNavigator();

export const ChatNavigator = () => {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen name="ChatDetails" component={Chat} />
    </ChatStack.Navigator>
  );
};