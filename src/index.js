import Home from './papes/home';
console.log(Home);

const router = () => {
  document.querySelector('#main-content').innerHTML = Home.render();
};
window.addEventListener("DOMContentLoaded", router);