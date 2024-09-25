import "./home.css";

export default function home() {
  // element creation
  const section = document.createElement("section");
  const backgroundImageContainer = document.createElement("div");
  const h1 = document.createElement("h1");

  // selectors setup / values should be the same format as if your in the html file
  // class
  section.classList = "home";
  h1.classList = "heading-text";
  backgroundImageContainer.classList = "background-image-container";
  // id
  section.id = "home";

  // contents
  h1.innerHTML = "Welcome to <br>  Burger Restaurant";

  // tree
  section.appendChild(backgroundImageContainer);
  section.appendChild(h1);

  return section;
}
