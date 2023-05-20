let cardsArr = [];
let sum = 0;
/* player status */
let hasBlackJack = false;
let isAlive = false;
/* reassign message variable */
let message = '';

// DOM
let dealerMessageEl = document.getElementById('dealer-el');
let totalCardEl = document.querySelector('#total-card-el');
let playerCardsEl = document.querySelector('#player-cards-el');

function drawRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;

  let firstCard = drawRandomCard();
  let secondCard = drawRandomCard();

  cardsArr = [firstCard, secondCard];

  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  playerCardsEl.textContent = `cards: `;

  for (let i = 0; i < cardsArr.length; i++) {
    playerCardsEl.textContent += cardsArr[i] + ' ';
  }

  totalCardEl.textContent = `sum: ${sum}`;
  if (sum < 21) {
    message = 'do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got blackjack! winner!";
    /* player has blackjack */
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    /* player is out of the game. */
    isAlive = false;
  }
  dealerMessageEl.textContent = message;
}
/* draw a new card function*/
function hitCard() {
  let drawCard = drawRandomCard();

  sum += drawCard;

  cardsArr.push(drawCard);
  renderGame();
}
