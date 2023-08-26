import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Chat } from "./Chat";
import { TabNavigator } from "./TabNavigator";

const Tab = createBottomTabNavigator();

export const Core = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Chat") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 89, // adjust height
          backgroundColor: "#151515", // set background color
          borderTopRightRadius: 30, // top right corner
          borderTopLeftRadius: 30, // top left corner
          // if you want to set border for the tab bar
          borderTopWidth: 0,
          borderColor: "grey",
          marginTop: 16,
        },
        // tabBarItemStyle:{
        // backgroundColor:'#00ff00',
        // margin:5,
        // borderRadius:10,
        // }
      })}
    >
      <Tab.Screen name="Chat" component={Chat} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
