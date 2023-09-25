import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomizeAssistant from '../CustomizeAssistant/CustomizeAssistant';
import { TasksComponent } from './TasksComponent';

const TasksStack = createNativeStackNavigator();

export default function TasksNavigator() {
  return (
    <TasksStack.Navigator screenOptions={{ headerShown: false }}>
      <TasksStack.Screen name="TasksScreen" component={TasksComponent} />
      <TasksStack.Screen name="CustomizeAssistantScreen" component={CustomizeAssistant} />
    </TasksStack.Navigator>
  );
};