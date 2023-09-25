import React from "react";

import SettingsNavigator from './Settings/SettingsNavigator'
import TasksNavigator from './Tasks/TasksNavigator';
import { TabNavigator } from "./TabNavigator";
import { ChatNavigator } from "./Chat";
import { History } from "./History";

export const Core = () => {
  return (
    <TabNavigator
      components={[
        { name: "Tasks", component: TasksNavigator },
        { name: "Chat", component: ChatNavigator },
        { name: "History", component: History },
        { name: "Settings", component: SettingsNavigator }
      ]}
    />
  );
};
