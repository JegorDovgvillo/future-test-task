import { Provider } from "react-redux";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import store from "./store/store";

import "./index.scss";
import "./fonts/arkhip-font.css";
import "./fonts/Cinzel-font.css";
import "./fonts/Gilroy-font.css";
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
