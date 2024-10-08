import "./styles.css";

import home from "./pages/home/home";
import menu from "./pages/menu/menu";
import about from "./pages/about/about";

(function init() {
  const contentContainer = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  const menuButton = document.querySelector("#menu-button");
  const aboutButton = document.querySelector("#about-button");

  display(contentContainer, home());

  [homeButton, menuButton, aboutButton].forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "home-button") {
        display(contentContainer, home());
      } else if (button.id === "menu-button") {
        display(contentContainer, menu());
      } else if (button.id === "about-button") {
        display(contentContainer, about());
      }
    });
  });

  function display(container, content) {
    container.innerHTML = "";
    container.appendChild(content);
  }
})();
