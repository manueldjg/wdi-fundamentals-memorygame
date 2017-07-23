console.log("Up and Running!");






var cards = ['queen','queen','king','king'];
// alert('Game is up and running!');

var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {

		if (cardsInPlay[0] === cardsInPlay[2]) {
			alert('You found a match!');
		} else if (cardsInPlay[0] !== cardsInPlay[2]) {
			alert("sorry try again!");
		}
	}

}

var flipCard = function(cardId) {
	console.log("user flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId])
	checkForMatch()
} 
flipCard(0)
flipCard(2)







// alert("You found a match!");




