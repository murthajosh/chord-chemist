import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBCuRB3rlJLtTD-8c_aU9uyehTM8IPCYH4",
  authDomain: "chord-chemist.firebaseapp.com",
  projectId: "chord-chemist",
  storageBucket: "chord-chemist.appspot.com",
  messagingSenderId: "624842935143",
  appId: "1:624842935143:web:6af1f67a95e2b5f5b43dc2"
};

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
