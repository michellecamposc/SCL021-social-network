import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

//import { app } from "./firebaseconfig.js";
import { registerAccount } from "../main.js";

// Autorizar a los usuarios con sus cuentas Google.
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

const provider = new GoogleAuthProvider();
//Registrar usuarios nuevos
//importar la funciondel create account
const auth = getAuth();
const newUser = registerAccount();
createUserWithEmailAndPassword(auth, newUser)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

export { logInGoogle };
