import { router } from "./views/components/router.js";

//Enrutamientos
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

window.addEventListener("load", () => {
  router(window.location.hash);
});

//Función de onclick en create account
document.getElementById("singUp");
document.addEventListener("click", registerAccount);

export function registerAccount() {
  const name = document.getElementById("nameAccount").value;
  const email = document.getElementById("emailAccount").value;
  const password = document.getElementById("PasswordAccount").value;
}
