let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
// line 11 and 12 are same
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "per",
  chips: 145,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// i made getRandomCard function for get random card
function getRandomCard() {
  // Math.random gives the no range between 0 to 1(Like this 0.0000 to 0.999)
  // Math.floor -> yeh decimal value ko remove kar deti hai
  let randomNumber = Math.floor(Math.random() * 13) + 1; // give 1 - 13
  // Expalin line no 19 -> math.random -> 0.000 - 12.9999 and math.floor-> 0 - 12 after add 1 so final result is -> 1 to 13
  if (randomNumber > 10) {
    // lvalue  queen,king ka 10 hoti hai.so agar 11 - 13 ke mid jo value aayegi whn pe 10 return ho jayegi
    return 10;
  } else if (randomNumber === 1) {
    // for ekka card
    return 11;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You have got a Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // check condition by using longical AND operator
  if (isAlive === true && hasBlackJack === false) {
    let addCard = getRandomCard();
    sum += addCard; // now new sum is 14 + 7  = 21
    cards.push(addCard);
    console.log(cards);
    // now call startGame() function got new result
    renderGame();
  }
}
