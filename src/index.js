import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import store from "./components/store/index";

// const firebase = require("firebase");
// require("firebase/firestore");
// // Initialize Firebase

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyDv-e96QtG9ssf0ATvKnhw53i3rwlex3GI",
  authDomain: "evertone-clone-3b696.firebaseapp.com",
  projectId: "evertone-clone-3b696",
  storageBucket: "evertone-clone-3b696.appspot.com",
  messagingSenderId: "439288971826",
  appId: "1:439288971826:web:cff6cd54b3bbc2fcb1722b",
});

const root = ReactDOM.createRoot(document.getElementById("evernote-container"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
