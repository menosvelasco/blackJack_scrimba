let firstCard = 8;
let secondCard = 10;
let sum = firstCard + secondCard;
/* player status */
let hasBlackJack = false;
let isAlive = true;
/* reassign message variable */
let message = '';

// DOM
let dealerMessageEl = document.getElementById('dealer-el');
let totalCardEl = document.querySelector('#total-card-el');
let playerCardsEl = document.querySelector('#player-cards-el');

function startGame() {
  playerCardsEl.textContent = `cards: ${firstCard} ${secondCard}`;
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
