import React, { Component } from 'react';
import { Context } from '../../context';
import CardImage from '../CardImage/CardImage';

class UserCards extends Component {
	render() {
		const c = this.context;
		return (
			<div>
				User Cards
				<div>
					{c.userCards.map(card => {
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

UserCards.contextType = Context;

export default UserCards;
