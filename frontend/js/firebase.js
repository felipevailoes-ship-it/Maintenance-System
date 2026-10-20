 import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

 import { getAuth } from 'https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js'
  
  const firebaseConfig = {
    apiKey: "AIzaSyA9hl8lTiqSnOlk_CcgWuLpJzcldkksIqM",
    authDomain: "erudite-flag-467417-u2.firebaseapp.com",
    projectId: "erudite-flag-467417-u2",
    storageBucket: "erudite-flag-467417-u2.firebasestorage.app",
    messagingSenderId: "681389355186",
    appId: "1:681389355186:web:030baa705e6a295ad359ab",
    measurementId: "G-WN4C2PREXM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth }; // deixa o auth disponível para quem fizer o import {auth} from "./firebase.js"