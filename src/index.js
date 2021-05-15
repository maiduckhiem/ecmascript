import Home from "./papes/home";
console.log(home);

const router = () => {
  document.querySelector("#main-content").innerHTML = Home.router();
};
window.addEventListener("DOMContenLoaded", router);