// Seems like we don't need to import a css here as this page have the same css selectors 
// // as home.js page and this might get inherited from that through the html file

export default function about() {
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
  h1.innerHTML = "Hi, we are the Burger Restaurant <br> and we will always be happy serve burger to you";

  // tree
  section.appendChild(backgroundImageContainer);
  section.appendChild(h1);

  return section;
}
