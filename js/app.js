const grid = document.querySelector(".grid");
const scoreText = document.getElementById("scoreText");
const overlay = document.querySelector(".overlay");
const playAgainBtn = document.getElementById("play-again");
const continueBtn = document.getElementById("continue");
const levelText = document.getElementById("levelText");
const timeLeftText = document.getElementById("timeLeftText");

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
let timeLeft = 15;

function checkGameState() {
  if (score === images.length) {
    // game ended
    overlay.classList.add("show");
    overlay.classList.add("game-won");
    timeLeft = 0;
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
        timeLeft += 2;
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

function gameReset() {
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
  overlay.classList.remove("game-won");

  timeLeft = 15;
}

playAgainBtn.addEventListener("click", function () {
  gameReset();
});

continueBtn.addEventListener("click", function () {
  // level up
  gameLevel += 1;
  levelText.textContent = `Level: ${gameLevel}`;

  // add more images/cards
  images.push(images[Math.floor(Math.random() * 6)]);

  gameReset();

  timeLeft += 5;
});

window.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    if (timeLeft > 0) {
      --timeLeft;
      timeLeftText.textContent = timeLeft;
    } else {
      console.log("Timeout!");
      // end game
      overlay.classList.add("show");
    }
  }, 1000);
});
