import { Provider } from "react-redux";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import store from "./store/store";

import "./index.scss";
import "./fonts/arkhip-font.css";
import "./fonts/Cinzel-font.css";
import "./fonts/Gilroy-font.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);