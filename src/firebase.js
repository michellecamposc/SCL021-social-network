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
  apiKey: "AIzaSyCtWxhTpICIY-RZ1VR3Wn3MCcjRKgLEe8A",
  authDomain: "gowildnature.firebaseapp.com",
  projectId: "gowildnature",
  storageBucket: "gowildnature.appspot.com",
  messagingSenderId: "922062437535",
  appId: "1:922062437535:web:938118ea8fe00a9ad576aa",
  measurementId: "G-8FCG51PPXL",
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
