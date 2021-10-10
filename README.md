# Memory Game

Match the cards before you run out of time! ⏰

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Run Locally](#run-locally)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Credits](#credits)

## Overview

### Screenshots

<kbd>![Memory game preview](https://user-images.githubusercontent.com/67356291/136655619-c885a1bf-b654-4aa8-b2a9-87be38c0b53d.png)</kbd>

<kbd>![Memory game overlay preview](https://user-images.githubusercontent.com/67356291/136655616-9ede6ca8-a95e-41c7-a348-f6127f34ddd3.png)</kbd>

<kbd>![Memory game mobile overlay preview](https://user-images.githubusercontent.com/67356291/136655617-9331ed6c-5d65-4096-82be-2e3ec8887fdf.png)</kbd>

<kbd>![Memory game mobile preview](https://user-images.githubusercontent.com/67356291/136655618-1c0a5231-9e23-491d-9abc-d9351306cd3f.png)</kbd>

### Links

- Live Site URL: [https://ishantbhurani.github.io/memory-game/](https://ishantbhurani.github.io/memory-game/)

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

### Useful resources

- [Eddy Sims Codepen](https://codepen.io/edeesims/pen/iGDzk) - card flipping animation
- [W3School](https://www.w3schools.com/howto/howto_css_flip_card.asp) - card flipping animation

## Author

- Twitter - [@IShaunt](https://twitter.com/IShaunt)

## Credits

- [Pexels](https://www.pexels.com/)
