import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomizeAssistant from '../CustomizeAssistant/CustomizeAssistant';
import { ChatContainer as Chat } from "./ChatContainer";

const ChatStack = createNativeStackNavigator();

export const ChatNavigator = (props) => {
  const { navigation } = props;

  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen name="ChatDetails" component={Chat} />
      <ChatStack.Screen name="CustomizeAssistantScreen" component={CustomizeAssistant} />
    </ChatStack.Navigator>
  );
};