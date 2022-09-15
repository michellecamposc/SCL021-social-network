import { router } from "../components/router.js";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

window.addEventListener("load", () => {
  router(window.location.hash);
});
