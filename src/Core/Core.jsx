import React from "react";

import SettingsNavigator from './Settings/SettingsNavigator'
import CustomizeAssistant from './CustomizeAssistant/CustomizeAssistant';
import { TabNavigator } from "./TabNavigator";
import { ChatNavigator } from "./Chat";
import { Tasks } from "./Tasks";
import { History } from "./History";

export const Core = () => {
  return (
    <TabNavigator
      components={[
        { name: "Tasks", component: Tasks },
        { name: "Chat", component: ChatNavigator },
        { name: "History", component: History },
        { name: "Settings", component: SettingsNavigator },
        { name: "CustomizeAssistant", component: CustomizeAssistant },
      ]}
    />
  );
};
