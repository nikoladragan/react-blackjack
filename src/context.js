import React, { Component } from 'react';
import cards from './data/cards';


const Context = React.createContext();

class ContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: cards,
			started: false,
			credit: 500,
			activeBet: 0,
			userCards: [],
			dealerCards: [],
			userHand: 0,
			dealerHand: 0,
			actions: {
				deal: false,
				hit: false,
				stand: false,
				split: false,
				double:false,
				insurance: false,
				surrender: false
			},

			// functions
			doStart: this.startGame.bind(this),
			changeActiveBet: this.changeActiveBet.bind(this),
			dealCards: this.dealCards.bind(this),
			hit: this.hit.bind(this)
		};
	}

	startGame() {
		console.log('start game?');
		this.setState(state => {
			const actions = state.actions;

			actions.deal = true;

			return {
				started: true,
				actions: actions
			};
		});
	}

	changeActiveBet(value) {
		this.setState(state => {
			const activeBet = state.activeBet + value;
			return {
				activeBet: activeBet,
				// credit: state.credit - value
			};
		});
	}

	dealCards() {
		if(this.state.activeBet > 0) {
			this.setState(state => {
				const actions = state.actions;
				// const userCards = [state.cards.pop(), state.cards.pop()];
				const userCards = this.drawCards(state.cards, 2);
				const dealerCards = this.drawCards(state.cards);

				const userHand = this.sumObjects(userCards, 'value');
				const dealerHand = this.sumObjects(dealerCards, 'value');

				actions.deal = false;
				actions.hit = true;
				actions.stand = true;

				return {
					actions: actions,
					userCards: userCards,
					cards: state.cards,
					dealerCards: dealerCards,
					userHand: userHand,
					dealerHand: dealerHand,
					credit: state.credit - state.activeBet,
				};
			}, () => {
				this.bustornah();
			});
		} else {
			console.log('place bet please');
		}
	}

	hit() {
		this.setState(state => {
			const userCards = state.userCards.concat(this.drawCards(state.cards));
			const userHand = this.sumObjects(userCards, 'value');

			return {
				userCards: userCards,
				userHand: userHand
			};
		}, () => {
			this.bustornah();
		});
	}

	drawCards(cards, amount = 1) {
		return cards.splice(Math.random() * (cards.length - 0) + 0, amount);
	}

	sumObjects(array, key) {
		let value = 0;

		for(let i = 0; i < array.length; i++) {
			value += array[i][key];
		}

		return value;
	}

	bustornah() {
		if(this.state.userHand < 21) {
			console.log('go on');
		} else if(this.state.userHand > 21) {
			console.log('bust');
			this.setState(state => {
				const actions = state.actions;
				actions.deal = true;
				actions.hit = false;
				actions.stand = false;
				actions.split = false;
				actions.double =false;
				actions.insurance = false;
				actions.surrender = false;
				console.log('set state called?');
				return {
					actions: actions
				};
			});
		} else {
			console.log('black jack!');
		}
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

const ContextConsumer = (props) => {
	return (
		<Context.Consumer>
			{props.children}
		</Context.Consumer>
	);
};

export {
	Context,
	ContextProvider,
	ContextConsumer
};
