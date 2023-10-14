import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi8nT8hVPSAtWbqpg1xUOkcNIsWBE-HMk",
  authDomain: "my-react-blog-1ffe3.firebaseapp.com",
  projectId: "my-react-blog-1ffe3",
  storageBucket: "my-react-blog-1ffe3.appspot.com",
  messagingSenderId: "339091450586",
  appId: "1:339091450586:web:a88124afaed67152ac53e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
