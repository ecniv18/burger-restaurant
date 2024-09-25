import "./styles.css";

import home from "./pages/home/home";

(function init() {
  const contentContainer = document.querySelector("#content");
  const homeButton = document.querySelector("#home-button");

  display(contentContainer, home());

  [homeButton].forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "home-button") {
        display(contentContainer, home());
      }
    });
  });

  function display(container, content) {
    container.innerHTML = "";
    container.appendChild(content);
  }
})();
