import data from "../data/webdev/webdev.js";

function cardsMemory() {
  const element = document.createElement("div");
  element.className = "grid";
  const printCard = data.items.map((items) => {
    return `
  <div class="card-container">
    <div class="flip-card">
      <div class="flip-card-front" style="background-color: ${items.bgColor}">
        <img class="logo" src="${items.image}" alt="movie picture">
        <p class="name"><strong>${items.id}</strong></p>
      </div>
      <div class="flip-card-back"></div>
    </div>
  </div>
  `;
  });

  const revealCard = ({ target }) => {
    target.parentNode.classList.add("reveal-card");
  };

  const duplicateCards = [...printCard, ...printCard];

  const shuffledArray = duplicateCards.sort(() => Math.random() - 0.5);

  element.innerHTML = shuffledArray.join("");
  element.addEventListener("click", revealCard);

  return element;
}

export default cardsMemory;

// const createElement = (tag, className) => {
//   const element = document.createElement(tag);
//   element.className = className;
//   return element;
// };

// const createCard = (dev) => {
//   const container = createElement("div", "card-container")
//   const card = createElement("div", "flip-card");
//   const front = createElement("div", "flip-card-front");
//   const back = createElement("div", "flip-card-back");

//   front.backgroundImage = ''

//   container.appendChild(card);
//   card.appendChild(front);
//   card.appendChild(back);

//   return container;
// };

// const loadGame = () => {

//   devs.forEach((dev) => {

//     const card = createCard();
//     grid.appendChild(card);
//   });
// }

// loadGame();

// export default createCard;
