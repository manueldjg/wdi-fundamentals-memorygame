console.log("Up and Running!");


var cards = ['queen','queen','king','king'];
// alert('Game is up and running!');

var cardOne = cards[0];
var cardTwo = cards[2];

var cardsInPlay = [];
cardsInPlay.push(cardOne);
// console.log(cardsInPlay);
cardsInPlay.push(cardTwo);
// console.log(cardsInPlay);

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert('You found a match!');
	} else if (cardsInPlay[0] !== cardsInPlay[2]) {
		alert("sorry try again!");
	}
}




// alert("You found a match!");



console.log("User Flipped" + " " + "queen");
console.log("User Flipped" + " " + "king");

