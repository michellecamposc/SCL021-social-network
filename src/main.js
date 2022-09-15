import { router } from "./views/components/router.js";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

window.addEventListener("load", () => {
  router(window.location.hash);
});

//al objeto de firebase agregar nombre
// o traer para acá singup o llevarse de la 16 a la 19 y dejarla en el createaccount
//y ahi buscr el btn y dejar el addeventlist.

//funcion export login google
// llamo a la funcion y la ejecuto





