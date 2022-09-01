// Este es el punto de entrada de tu aplicacion
import { login } from "./views/login.js";

//Contenedor que imprime la información de la app
const rootContainer = document.getElementById("root");
rootContainer.appendChild(login());
