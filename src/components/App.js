import data from "../data/webdev/webdev.js";

const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

function createCard() {
  const section = createElement("section", "grid");
  const card = data.items.map((items) => {
    return `
    <ul class="card" data-id="${items.id}">
      <li class="flip-card-front" style="background-color: ${items.bgColor}">
        <img class="logo" src="${items.image}" alt="image logo">
        <p class="name"><strong>${items.id}</strong></p>
      </li>
      <li class="flip-card-back"></li>
    </ul>
  `;
  });

  const duplicateCards = [...card, ...card];

  const shuffledArray = duplicateCards.sort(() => Math.random() - 0.5);

  section.innerHTML = shuffledArray.join("");

  window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem("player");
    startTimer();
  };

  const startTimer = () => {
    setInterval(() => {
      const currentTime = +timer.innerHTML;
      timer.innerHTML = currentTime + 1;
    }, 1000);
  };

  let firstCard = "";
  let secondCard = "";

  const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled-card");

    if (disabledCards.length === 20) {
      alert(
        `Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}.

        Você sabe a diferença entre append() e appendTo()?

        O append é para quando você tem um elemento na mão e quer colocar algo nele. Tenho uma <li> e quero inserir lá dentro alguma coisa. Ou seja, seu início é um elemento que terá coisas dentro. Já o appendTo é o contrário.`
      );
    }
  };

  const checkCards = () => {
    const firstId = firstCard.getAttribute("data-id");
    const secondId = secondCard.getAttribute("data-id");

    if (firstId === secondId) {
      firstCard.classList.add("disabled-card");
      secondCard.classList.add("disabled-card");

      firstCard = "";
      secondCard = "";

      checkEndGame();
    } else {
      setTimeout(() => {
        firstCard.classList.remove("reveal-card");
        secondCard.classList.remove("reveal-card");

        firstCard = "";
        secondCard = "";
      }, 500);
    }
  };

  const revealCard = ({ target }) => {
    if (target.classList.contains("flip-card-back")) {
      if (target.parentNode.className.includes("reveal-card")) {
        return;
      }

      if (firstCard === "") {
        target.parentNode.classList.add("reveal-card");
        firstCard = target.parentNode;
      } else if (secondCard === "") {
        target.parentNode.classList.add("reveal-card");
        secondCard = target.parentNode;

        checkCards();
      }
    }
  };

  section.addEventListener("click", revealCard);

  return section;
}

export default createCard;
