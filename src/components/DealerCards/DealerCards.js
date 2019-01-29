import React, { Component } from 'react';
import { Context } from '../../context';
import CardImage from '../CardImage/CardImage';

class DealerCards extends Component {
	render() {
		const c = this.context;
		return (
			<div>
				Dealer Cards
				<div>
					{c.dealerCards.map(card => {
						return (
							<div key={card.id} className="card">
								<CardImage card={card}/>
								{card.name}
								{card.suit}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

DealerCards.contextType = Context;

export default DealerCards;
