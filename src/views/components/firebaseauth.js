import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail, //nuevo
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

import { app } from './firebaseconfig.js';  //Cambiar a firebaseconfig.js

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
          // Signed in
          const user = userCredential.user;
          // ...
        })
    //Función inputErrors, Preguntar: ¿Cómo confirmar desde la consola el error?
    //Identificar valores name,email,password y agregar condiciones para cada error (sección vacía)
        .catch((error) => {
          //function inputErrors() {
            //const inputError = document.getElementById('inputErrors');
            //const email = document.getElementById('email').value;
          
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Falta tu mail");
       } );
    };

// Función de registro de nuevos usuarios
const registerAccount= (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //window.location.hash = '#/muro';

        // Signed in
        const user = userCredential.user;
        //emailVerification(auth);
        return user;
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
        //return errorCode;
        //Identificar valores name,email,password y agregar condiciones para cada error (sección vacía)
        console.log("Falta tu mail register");
      });
  };
  /*sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });*/

  export {  
    app,
    auth,
    registerAccount,
    logInWithGoogle,
    logInWithEmailAndPassword,
  };
  