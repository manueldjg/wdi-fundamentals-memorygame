console.log("Up and Running!");


var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');
var cardOne= [0];
var cardTwo = [2];

if (cardsInPlay.length === 2) {
} else if (cardsInPlay[0] === cardsInPlay [2]) {
	result = alert('You found a match!');
} else if (cardsInPlay[0] != cardsInPlay[2]) {
	result = alert('Sorry, try again');
}


console.log("User Flipped" + " " + "queen");
console.log("User Flipped" + " " + "king");

