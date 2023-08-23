import React, { useState, useEffect } from "react";
import { AppRouter } from "./src/router";
import store from "./src/store";
import { Provider } from "react-redux";
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  let customFonts = {
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.otf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.otf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.otf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.otf"),
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
      <AppRouter />
    </Provider>
  );
}
