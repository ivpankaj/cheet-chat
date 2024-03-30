import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbMInn8hLQghbJDGW1v8HqpNZTbIgZBtc",
  authDomain: "chatty-8386d.firebaseapp.com",
  databaseURL: "https://chatty-8386d-default-rtdb.firebaseio.com",
  projectId: "chatty-8386d",
  storageBucket: "chatty-8386d.appspot.com",
  messagingSenderId: "631599710529",
  appId: "1:631599710529:web:28b1c5a9a1f789d08721c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
