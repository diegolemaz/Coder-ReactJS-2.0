import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQyaXIIIu5KUA9R217TR3VXDWz0nKhGQk",
  authDomain: "test-firebase-clase13-8a591.firebaseapp.com",
  projectId: "test-firebase-clase13-8a591",
  storageBucket: "test-firebase-clase13-8a591.appspot.com",
  messagingSenderId: "650786208939",
  appId: "1:650786208939:web:1cf13d7ca4b1a564b30bee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
