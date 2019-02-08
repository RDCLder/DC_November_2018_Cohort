import React, { Component } from 'react';
import MemoryCard from "./MemoryCard.js";
import './App.css';

function generateDeck() {
	let symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
	let deck = [];
	for (let i = 0; i < 16; i++) {
		deck.push({ isFlipped: false, symbol: symbols[i % 8] })
	}
	shuffle(deck);
	return deck;
}

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

class App extends Component {

	constructor() {
		super();
		this.state = {
			deck: generateDeck(),
			pickedCards: []
		}
	}

	unflipCards(card1Index, card2Index) {
		let newDeck = this.state.deck.map(card => {
			return { ...card }
		});
		// This is much more efficient than creating a new card
		newDeck[card1Index].isFlipped = false;
		newDeck[card2Index].isFlipped = false;
		this.setState({ deck: newDeck });
	}

	// Function is bound to each specific card
	pickCard(cardIndex) {
		// Can't flip cards already flipped over
		if (this.state.deck[cardIndex].isFlipped) {
			return;
		}

		// Let app keep track of which card was flipped
		let cardToFlip = { ...this.state.deck[cardIndex] };
		cardToFlip.isFlipped = true;
		let newPickedCards = this.state.pickedCards.concat(cardIndex);

		let newDeck = this.state.deck.map((card, index) => {
			if (cardIndex === index) {
				return cardToFlip;
			}
			return card;
		});

		// Compare cards once two cards are flipped
		if (newPickedCards.length === 2) {
			let card1Index = newPickedCards[0];
			let card2Index = newPickedCards[1];
			var card1 = newDeck[card1Index];
			var card2 = newDeck[card2Index];
			if (card1.symbol !== card2.symbol) {
				setTimeout(() => {
					// Disregard instructions which tell you to bind the unflipCards method
					// Because this is called in pickCard method, and pickCard method
					// is already bound to each card, another bind will cause unflipCards to not work
					this.unflipCards(card1Index, card2Index);
				}, 700);
			}
			newPickedCards = [];
		}

		this.setState({ deck: newDeck, pickedCards: newPickedCards });
	}

	render() {

		let cardsJSX = this.state.deck.map((card, index) => {
			return <MemoryCard pickCard={this.pickCard.bind(this, index)} key={index} symbol={card.symbol} isFlipped={card.isFlipped} />
		});

		return (
			<div className="App">
				<header className="App-header">
					<h1>Memory Game</h1>
					<p>Match Cards To Win</p>
				</header>
				<div>
					{cardsJSX.slice(0, 4)}
				</div>
				<div>
					{cardsJSX.slice(4, 8)}
				</div>
				<div>
					{cardsJSX.slice(8, 12)}
				</div>
				<div>
					{cardsJSX.slice(12, 16)}
				</div>
			</div>
		);
	}
}

export default App;
