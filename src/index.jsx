import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from 'firebase/app';
import { auth } from './data/firebase';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_9LJaDX0EmvqfEeYJGExdHRqQN5zo_FU",
    authDomain: "kavi-597ca.firebaseapp.com",
    projectId: "kavi-597ca",
    storageBucket: "kavi-597ca.appspot.com",
    messagingSenderId: "609330279022",
    appId: "1:609330279022:web:647d3f879d5c0db5446c7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
