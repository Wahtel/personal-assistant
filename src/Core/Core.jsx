import React from "react";
import { TabNavigator } from "./TabNavigator";
import { Chat } from "./Chat";
import { Settings } from "./Settings";
import { Tasks } from "./Tasks";
import { History } from "./History";

export const Core = () => {
  return (
    <TabNavigator
      components={[
        { name: "Tasks", component: Tasks },
        { name: "Chat", component: Chat },
        { name: "History", component: History },
        { name: "Settings", component: Settings },
      ]}
    />
  );
};
