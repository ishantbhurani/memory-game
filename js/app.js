// document.querySelector(".card").style.setProperty("--card-img", "orange");

const grid = document.querySelector(".grid");

const images = [
  "doge.jpg",
  "ForeverAlone.jpg",
  "neildegrasse.jpg",
  "Overly_attached_GF.jpg",
  "YaoMingMeme.jpg",
  "YUNO.jpg",
];

let score = 0;
let flippedCards = [];

function checkFlippedCards() {
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].style.getPropertyValue("--card-img") ===
      flippedCards[1].style.getPropertyValue("--card-img")
    ) {
      ++score;
      setTimeout(() => {
        flippedCards.forEach((card) => card.style.removeProperty("--card-img"));
        flippedCards = [];
      }, 500);
    } else {
      setTimeout(() => {
        flippedCards.forEach((card) => card.classList.remove("flipped"));
        flippedCards = [];
      }, 500);
    }
  }
}

function createCards() {
  const len = images.length;
  let cards = [];
  for (let i = 0; i < len * 2; ++i) {
    const newCard = document.createElement("li");

    newCard.style.setProperty(
      "--card-img",
      `url(../images/${images[i % len]})`
    );

    newCard.classList.add("card", "flippe");
    newCard.addEventListener("click", function () {
      this.classList.add("flipped");
      if (
        flippedCards.includes(this) ||
        !this.style.getPropertyValue("--card-img")
      )
        return;
      flippedCards.push(this);
      checkFlippedCards();
    });
    cards.push(newCard);
  }
  cards.sort(() => Math.random() - 0.5);
  return cards;
}

function renderCards(cards) {
  cards.forEach((card) => grid.appendChild(card));
}

const cards = createCards();
renderCards(cards);
