let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
/* player status */
let hasBlackJack = false;
let isAlive = true;
/* reassign message variable */
let message = '';

if (sum < 21) {
  message = 'do you want to draw a new card?';
} else if (sum === 21) {
  message = "Whohoo!!! You've got blackjack! winner!";
  /* player has blackjack */
  hasBlackJack = true;
} else {
  message = "You're out of the game!";
  /* player is out of the game. */
  isAlive = false;
}

console.log(message);
