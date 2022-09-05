// eslint import/no-unresolved: [2, { ignore: ['gstatic'] }] */

// importar modulos de firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoDeLMhXONjyBQlNrxAlrO3FPIpZjSSMw",
  authDomain: "gowildnature-f8558.firebaseapp.com",
  projectId: "gowildnature-f8558",
  storageBucket: "gowildnature-f8558.appspot.com",
  messagingSenderId: "234342302640",
  appId: "1:234342302640:web:cb50e19dc5d4c88010cc75",
  measurementId: "G-C2FMW2388X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// auth a los usuarios con sus cuentas Google.
const logInGoogle = () => {
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

export { logInGoogle };
