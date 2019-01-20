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
			dealCards: this.dealCards.bind(this)
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
				credit: state.credit - value
			};
		});
	}

	dealCards() {
		this.setState(state => {
			const actions = state.actions;

			actions.deal = false;
			actions.hit = true;
			actions.stand = true;

			return {
				actions: actions
			};
		});
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
