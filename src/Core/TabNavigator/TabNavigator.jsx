import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatIcon, SettingsIcon, TasksIcon, HistoryIcon } from "./icons";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  height: 89, // adjust height
  backgroundColor: "#151515", // set background color
  borderTopRightRadius: 30, // top right corner
  borderTopLeftRadius: 30, // top left corner
  borderTopWidth: 0,
  borderColor: "grey",
  marginTop: 16,
};

const activeTintColor = "#0C7BEB";
const inactiveTintColor = "#5F5F5F";

export const TabNavigator = ({ components }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        activeTintColor,
        inactiveTintColor,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Chat") {
            return <ChatIcon color={color} />;
          } else if (route.name === "Settings") {
            return <SettingsIcon color={color} />;
          } else if (route.name === "Tasks") {
            return <TasksIcon color={color} />;
          }

          return <HistoryIcon color={color} />;
        },
        tabBarStyle,
      })}
    >
      {components.map((component) => (
        <Tab.Screen
          key={component.name}
          name={component.name}
          component={component.component}
        />
      ))}
    </Tab.Navigator>
  );
};
