import React from "react";
import { TabNavigator } from "./TabNavigator";
import { ChatNavigator } from "./Chat";
import { Settings } from "./Settings";
import { Tasks } from "./Tasks";
import { History } from "./History";

export const Core = () => {
  return (
    <TabNavigator
      components={[
        { name: "Chat", component: ChatNavigator },
        { name: "Tasks", component: Tasks },
        { name: "History", component: History },
        { name: "Settings", component: Settings },
      ]}
    />
  );
};
