// Este es el punto de entrada de tu aplicacion
import { login } from "./views/login.js";
import { createAccount } from "./views/createAccount.js";

//Impresión del login en contenedor creado en HTML
const rootContainer = document.getElementById("root");
rootContainer.appendChild(login());

//Impresión del create account
