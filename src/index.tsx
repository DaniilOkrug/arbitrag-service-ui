import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
