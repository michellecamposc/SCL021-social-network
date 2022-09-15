// importar modulos de firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBoDeLMhXONjyBQlNrxAlrO3FPIpZjSSMw",
  authDomain: "gowildnature-f8558.firebaseapp.com",
  projectId: "gowildnature-f8558",
  storageBucket: "gowildnature-f8558.appspot.com",
  messagingSenderId: "234342302640",
  appId: "1:234342302640:web:cb50e19dc5d4c88010cc75",
  measurementId: "G-C2FMW2388X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
