// JavaScript
const diceImg1 = document.querySelector(".img1");
const diceImg2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

diceImg1.setAttribute('src', randomDiceImage);
diceImg2.setAttribute('src', randomDiceImage2);

if (randomNumber1 === randomNumber2) {
    h1.textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    h1.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    h1.textContent = "Player 2 Wins! 🚩";
}

/*
switch (randomNumber1) {
    case 1:
        diceImg1.setAttribute('src', './images/dice1.png');
        break;
    case 2:
        diceImg1.setAttribute('src', './images/dice2.png');
        break;
    case 3:
        diceImg1.setAttribute('src', './images/dice3.png');
        break;
    case 4:
        diceImg1.setAttribute('src', './images/dice4.png');
        break;
    case 5:
        diceImg1.setAttribute('src', './images/dice5.png');
        break;
    case 6:
        diceImg1.setAttribute('src', './images/dice6.png');
        break;
} 


switch (randomNumber2) {
    case 1:
        diceImg2.setAttribute('src', './images/dice1.png');
        break;
    case 2:
        diceImg2.setAttribute('src', './images/dice2.png');
        break;
    case 3:
        diceImg2.setAttribute('src', './images/dice3.png');
        break;
    case 4:
        diceImg2.setAttribute('src', './images/dice4.png');
        break;
    case 5:
        diceImg2.setAttribute('src', './images/dice5.png');
        break;  
    case 6:
        diceImg2.setAttribute('src', './images/dice6.png');
        break;
}
*/
