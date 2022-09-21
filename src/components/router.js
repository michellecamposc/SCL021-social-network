import { createAccount } from "../views/createAccount.js";
import { login } from "../views/login.js";
import {createPost} from "../views/post.js";

export function router(hash) {
  //Impresión del login en contenedor creado en HTML
  const rootContainer = document.getElementById("root");
  if (hash === "#/createAccount") {
    document.getElementById("root").innerHTML = "";
    rootContainer.appendChild(createAccount());
  }  
  //Aún no imprime
  else if (hash === "#/post") {
    document.getElementById("root").innerHTML = "";
    rootContainer.appendChild(createPost());
  } else {
    document.getElementById("root").innerHTML = "";
    rootContainer.appendChild(login());
  }
}
