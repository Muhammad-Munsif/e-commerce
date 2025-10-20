// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* To add a provider it will make our code is eacy */}
    <Provider store={store}>
      {/* this is parent Components */}
      <App />
    </Provider>
  </React.StrictMode>
);
