let firstCard = 12;
let secondCard = 11;
let sum = firstCard + secondCard;
/* player status */
let hasBlackJack = false;
let isAlive = true;

if (sum < 21) {
  console.log('do you want to draw a new card?');
} else if (sum === 21) {
  console.log("Whohoo!!! You've got blackjack! winner!");
  /* player has blackjack */
  hasBlackJack = true;
} else {
  console.log("You're out of the game!");
  /* player is out of the game. */
  isAlive = false;
}
