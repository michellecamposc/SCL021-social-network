import { createAccount } from "../createAccount.js";
import { login } from "../login.js";

export function router(hash) {
  //Impresión del login en contenedor creado en HTML
  const rootContainer = document.getElementById("root");
  if (hash === "#/createAccount") {
    document.getElementById("root").innerHTML = "";
    rootContainer.appendChild(createAccount());
  } else {
    document.getElementById("root").innerHTML = "";
    rootContainer.appendChild(login());
  }
}
