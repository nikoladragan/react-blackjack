const cards = [];
const suits = [
	'Hearts',
	'Diamonds',
	'Clubs',
	'Spades'
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const numberOfDecks = 1;


for(let i = 0; i < numberOfDecks; i++) {
	numbers.forEach(n => {
		suits.forEach(s => {
			cards.push({
				value: typeof n === 'string' ? 10 : n,
				suit: s,
				name: n
			});
		});
	});
}

// shuffle the array
for(let i = 0; i < cards.length; i++) {
	const j = Math.floor(Math.random() * (i + 1));
	const temp = cards[i];
	cards[i] = cards[j];
	cards[j] = temp;
}

export default cards;
