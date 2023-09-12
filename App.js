import React, { useState, useEffect } from "react";
import { AppRouter } from "./src/router";
import { EventProvider } from 'react-native-outside-press';
import store from "./src/store";
import { Provider } from "react-redux";
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  let customFonts = {
    "SF-Pro-Text-Black": require("./assets/fonts/SF-Pro-Text-Black.otf"), // 900
    "SF-Pro-Text-Heavy": require("./assets/fonts/SF-Pro-Text-Heavy.otf"), // 800
    "SF-Pro-Text-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"), // 700
    "SF-Pro-Text-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"), // 600
    "SF-Pro-Text-Medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"), // 500
    "SF-Pro-Text-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"), // 400
    "SF-Pro-Text-Light": require("./assets/fonts/SF-Pro-Text-Light.otf"), // 300
    "SF-Pro-Text-Thin": require("./assets/fonts/SF-Pro-Text-Thin.otf"), // 200
    "SF-Pro-Text-Ultralight": require("./assets/fonts/SF-Pro-Text-Ultralight.otf"), // 100
    "SF-Pro": require("./assets/fonts/SF-Pro.ttf"),
  };

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <EventProvider>
        <AppRouter />
      </EventProvider>
    </Provider>
  );
}
