import "./menu.css";
import cheeseBurger from "/src/asset/menu/cheese-burger.jpeg";
import spicyChicken from "/src/asset/menu/spicy-chicken-burger.jpeg"; 
import triplePatty from "/src/asset/menu/triple-patty-burger.jpeg"; 


export default function menu() {
  // init
  const itemList = [
    new MenuItem("Cheese Burger", 15, cheeseBurger ),
    new MenuItem("Spicy Chicken", 15, spicyChicken ),
    new MenuItem("Triple Patty", 15, triplePatty),
  ];

  // element creation
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  const itemSection = document.createElement("div");

  // selectors setup / values should be the same format as if your in the html file
  // class
  section.classList = "menu";
  h1.classList = "menu-heading-text";
  itemSection.classList = "menu-item-section";

  // id
  section.id = "menu";

  // contents
  h1.innerText = "MENU";

  // tree
  section.appendChild(h1);
  section.appendChild(itemSection);
  appendElements(itemSection, itemList)

  return section;
}

function MenuItem(title, price, imageURL) {
  this.title = title;
  this.price = price;
  this.imageURL = imageURL;
}

function card({ title, price, imageURL }) {
  // element creation
  const article = document.createElement("article");
  const backgroundImageContainer = document.createElement("div");
  const imgElem = document.createElement("img");
  const titleElem = document.createElement("h2");
  const priceElem = document.createElement("p");

  // selectors setup / values should be the same format as if your in the html file
  // class
  article.classList = "menu-item-card";
  backgroundImageContainer.classList = "menu-item-card-image";
  titleElem.classList = "menu-item-card-title";
  priceElem.classList = "price";

  // id

  // contents
  titleElem.innerText = title;
  priceElem.innerText =` \$${price}`;
  imgElem.src = imageURL;
  imgElem.alt = `image of a ${title}`;


  // tree
  
  article.appendChild(backgroundImageContainer)
  article.appendChild(titleElem);
  article.appendChild(priceElem);

  backgroundImageContainer.appendChild(imgElem);

  return article;
}

function appendElements(targetElement, items) {
  items.forEach((item) => {
    targetElement.appendChild(card(item));
  });
}
