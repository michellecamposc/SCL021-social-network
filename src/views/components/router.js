import { createAccount } from "../createAccount.js";
import { login } from "../login.js";

export function router (route){
    //Impresión del login en contenedor creado en HTML
    const rootContainer = document.getElementById("root");

    if (route === "#/createAccount")
        rootContainer.appendChild(createAccount());
    else
        rootContainer.appendChild(login());
}

//replace children// 

