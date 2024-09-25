import "./styles.css";

import home from "./pages/home/home";
import menu from "./pages/menu/menu";

(function init() {
  const contentContainer = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");
  const menuButton = document.querySelector("#menu-button");

  display(contentContainer, home());

  [homeButton, menuButton].forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "home-button") {
        display(contentContainer, home());
      } else if (button.id === "menu-button") {
        display(contentContainer, menu());
      }
    });
  });

  function display(container, content) {
    container.innerHTML = "";
    container.appendChild(content);
  }
})();
