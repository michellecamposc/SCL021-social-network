import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

import { app } from "./firebaseconfig.js";
import { router } from "./router.js";

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
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      //Alertas en caso de error
      switch (errorCode) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        case "auth/user-not-found":
          alert("The email is not registered");
          break;
        case "auth/invalid-email":
          alert("Verify your email");
          break;
        case "auth/internal-error":
          alert("Enter your password");
          break;
      }
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
      // const errorMessage = error.message;

      // Alertas en caso de errores
      switch (errorCode) {
        case "auth/email-already-in-use":
          alert("The email address is already in use");
          break;
        case "auth/missing-email":
          alert("Please enter your email");
          break;
        case "auth/invalid-email":
          alert("Verify your email");
          break;
        case "auth/weak-password":
          alert("Your password must be at least 6 characters");
          break;
        case "auth/internal-error":
          alert("Enter your password");
          break;
      }
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    router("#/post");
    window.location.hash = "#/post";
    console.log("Ingresaste");
  } else {
    router("#/login");
    window.location.hash = "#/login";
    console.log("no estás logeado");
  }
});

export {
  app,
  auth,
  registerAccount,
  logInWithGoogle,
  logInWithEmailAndPassword,
};
