# Memory Game

Match the cards before you run out of time! ⏰

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [Features](#features)
- [Run Locally](#run-locally)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Credits](#credits)

## Overview

### Screenshots

<kbd>![Memory game preview](https://user-images.githubusercontent.com/67356291/136698884-d4354d87-3847-49b3-87ea-efd9f44ddf55.png)</kbd>

<kbd>![Memory game win preview](https://user-images.githubusercontent.com/67356291/136698880-9dd64e43-bfbd-40d7-9231-79364d52ba80.png)</kbd>

<kbd>![Memory game lost preview](https://user-images.githubusercontent.com/67356291/136698882-05ce6b0c-8e3e-458e-943a-7fa232e646e0.png)</kbd>

<kbd>![Memory game mobile preview](https://user-images.githubusercontent.com/67356291/136698877-4f50ed5d-19d9-4eee-869a-73d35613cbb1.png)</kbd>

<kbd>![Memory game lost mobile preview](https://user-images.githubusercontent.com/67356291/136698876-5157dbcb-fff0-4665-b1b7-4255e4bc0ffe.png)</kbd>

### Links

- Live Site URL: [https://ishantbhurani.github.io/memory-game/](https://ishantbhurani.github.io/memory-game/)

### Features

- Flipping cards
- Cards arranged randomly
- Countdown timer
- Levels, with increasing cards

## Run Locally

Clone the project

```bash
  git clone git@github.com:ishantbhurani/memory-game.git
```

Go to the project directory

```bash
  cd memory-game
```

Run `index.html`

```bash
  <browsername> index.html
```

E.g.

```bash
  firefox index.html
```

```bash
  google-chrome index.html
```

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid

### What I learned

- card flip animation

```css
.card {
  width: 150px;
  height: 150px;
  position: relative;
  perspective: 800px;
  cursor: pointer;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: 0.6s;
  box-shadow: 0.2em 0.2em 0.5em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  z-index: -1;
}

.card::before {
  background: url("../images/default.jpg") center/cover no-repeat;
}

.card::after {
  background: var(--card-img, hsl(0, 0%, 90%, 0.5)) center/cover no-repeat;
  transform: rotateY(180deg);
}

.card.flipped::before {
  transform: rotateY(-180deg);
}

.card.flipped::after {
  transform: rotateY(0);
}
```

- Countdown timer
- Dynamic grid elements

### Useful resources

- [Eddy Sims Codepen](https://codepen.io/edeesims/pen/iGDzk) - card flipping animation
- [W3School](https://www.w3schools.com/howto/howto_css_flip_card.asp) - card flipping animation

## Author

- Twitter - [@IShaunt](https://twitter.com/IShaunt)

## Credits

- [Pexels](https://www.pexels.com/)
