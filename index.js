let firstCard = 12;
let secondCard = 11;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.log('do you want to draw a new card?');
} else if (sum === 21) {
  console.log("Whohoo!!! You've got blackjack! winner!");
} else {
  console.log("You're out of the game!");
}
