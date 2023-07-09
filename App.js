import React from "react";
import { AppRouter } from "./src/router";
import store from "./src/store";
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
