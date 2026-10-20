 import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

 import { getAuth } from 'https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js'
  
  const firebaseConfig = {
    apiKey: "AIzaSyC9R7iD-hZ_dZ-g0jjDhqKY6Z4QMPFMXuY",
    authDomain: "maintenance-system-280e6.firebaseapp.com",
    projectId: "maintenance-system-280e6",
    storageBucket: "maintenance-system-280e6.firebasestorage.app",
    messagingSenderId: "1001528731517",
    appId: "1:1001528731517:web:264c7816c676737bf48e14",
    measurementId: "G-S2FM7N972N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth }; // deixa o auth disponível para quem fizer o import {auth} from "./firebase.js"