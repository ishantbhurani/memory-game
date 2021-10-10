const grid = document.querySelector(".grid");
const scoreText = document.getElementById("scoreText");
const overlay = document.querySelector(".overlay");
const playAgainBtn = document.getElementById("play-again");
const continueBtn = document.getElementById("continue");
const levelText = document.getElementById("levelText");

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
let gameLevel = 1;

function checkGameState() {
  if (score === images.length) {
    // game ended
    overlay.classList.add("show");
  }
}

function checkFlippedCards() {
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].style.getPropertyValue("--card-img") ===
      flippedCards[1].style.getPropertyValue("--card-img")
    ) {
      setTimeout(() => {
        scoreText.textContent = `Score: ${++score}`;
        checkGameState();
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

    newCard.classList.add("card");
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
  grid.innerHTML = "";
  cards.forEach((card) => grid.appendChild(card));
}

const cards = createCards();
renderCards(cards);

playAgainBtn.addEventListener("click", function () {
  // reset score
  score = 0;
  scoreText.textContent = "Score: 0";

  // reset cards
  const cards = createCards();
  renderCards(cards);

  // reset flipped cards
  flippedCards = [];

  // remove overlay
  overlay.classList.remove("show");
});

continueBtn.addEventListener("click", function () {
  // reset score
  score = 0;
  scoreText.textContent = "Score: 0";

  // reset flipped cards
  flippedCards = [];

  // level up
  gameLevel += 1;
  levelText.textContent = `Level: ${gameLevel}`;

  images.push(images[Math.floor(Math.random() * 6)]);

  // reset cards
  const cards = createCards();
  renderCards(cards);

  // remove overlay
  overlay.classList.remove("show");
});
