// console.log("Up and Running!");






var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}	
];


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
	console.log("user flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank)
	console.log("cardImage " + cards[cardId].cardImage)
	console.log("cardImage " + cards[cardId].suit)
	checkForMatch()
} 
flipCard(0)
flipCard(2)







// alert("You found a match!");




