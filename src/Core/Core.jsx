import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Chat } from "./Chat";
import { Settings } from "./Settings";
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

          if (route.name.includes("Chat")) {
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
          borderTopWidth: 0,
          borderColor: "grey",
          // padding: "14px 49px 34px 49px",
          marginTop: 16,
          // position: 'absolute',
          // paddingTop: 16,
        },
        tabBarItemStyle:{
        // backgroundColor:'#00ff00',
        // margin:5,
        // borderRadius:10,
        // flex: 1,
        // alignItems: 'center',
        // padding: "14px 49px 34px 49px",
        }
      })}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
