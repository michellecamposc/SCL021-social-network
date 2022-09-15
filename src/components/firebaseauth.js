import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

import { app } from "./firebaseconfig.js"; //Cambiar a firebaseconfig.js

const auth = getAuth();
const provider = new GoogleAuthProvider();

//Función para iniciar/loggear a los usuarios con sus cuentas de Google. (Popup Google)
const logInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      return credential;
    })
    .catch((error) => {
      const errorCode = error.code;
      return errorCode;
    });
};
//Login con email y password (Luego de crear una cuenta)
const logInWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // window.location.hash = '#/muro';
      const user = userCredential.user;
    })
    //Identificar valores name,email,password y agregar condiciones para cada error (sección vacía)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Falta tu mail");
    });
};

// Función de registro de nuevos usuarios
const registerAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //window.location.hash = '#/muro';

      // Promesa para enviar correo de verificación
      const user = userCredential.user;
      return sendEmailVerification(user); //este return se convierte en promesa y tiene como parametro el usuario creado
    })
    .then((successEmail) => {
      console.log(successEmail);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //Identificar valores name,email,password y agregar condiciones para cada error (sección vacía)
      console.log("Falta tu mail register");
    });
};

export {
  app,
  auth,
  registerAccount,
  logInWithGoogle,
  logInWithEmailAndPassword,
};
