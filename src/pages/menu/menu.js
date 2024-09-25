import "./menu.css";

export default function menu() {
  // init
  const itemList = [
    new MenuItem("burger1", 15, ""),
    new MenuItem("burger2", 15, ""),
    new MenuItem("burger3", 15, ""),
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

  itemList.forEach((item) => {
    itemSection.appendChild(card(item));
  });

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
  priceElem.innerText = price;

  // tree
  article.appendChild(titleElem);
  article.appendChild(priceElem);

  return article;
}
