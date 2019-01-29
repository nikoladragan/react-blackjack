import React, { Component } from 'react';
import { Context } from '../../context';

class Actions extends Component {
	startGame() {
		this.context.doStart();
	}
	render() {
		console.log('ovo?', this.context.actions);
		const c = this.context;
		return (
			<div className="actions">
				{c.started ?
					<>
						{c.actions.deal && <button
							type="button"
							onClick={() => this.context.dealCards()}
							className="button">Deal</button> }
						{c.actions.hit && <button
							type="button"
							className="button"
							onClick={() => this.context.hit()}>Hit</button> }
						{c.actions.stand && <button type="button" className="button">Stand</button> }
						{c.actions.split && <button type="button" className="button">Split</button> }
						{c.actions.double && <button type="button" className="button">Double</button> }
						{c.actions.insurance && <button type="button" className="button">Insurance</button> }
						{c.actions.surrender && <button type="button" className="button">Surrender</button> }
					</>
					:
					<button
						type="button"
						className="button"
						onClick={() => this.startGame()}>Start</button>
				}
			</div>
		);
	}
}

Actions.contextType = Context;

export default Actions;
