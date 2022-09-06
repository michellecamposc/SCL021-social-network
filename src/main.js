import { router } from "./views/components/router.js";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

window.addEventListener("load", () => {
  router(window.location.hash);
});
