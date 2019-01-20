import React, { Component } from 'react';
import {TimelineLite} from 'gsap/all';
import {Context} from '../../context';

class Chips extends Component {
	constructor(props) {
		super(props);
		this.chips = [
			{
				value: 0.25,
				color: 'peach',
				text: '0.25€'
			},
			{
				value: 1,
				color: 'white',
				text: '1€'
			},
			{
				value: 2.5,
				color: 'pink',
				text: '2.5€'
			},
			{
				value: 5,
				color: 'red',
				text: '5€'
			},
			{
				value: 10,
				color: 'blue',
				text: '10€'
			},
			{
				value: 20,
				color: 'yellow',
				text: '20€'
			},
			{
				value: 25,
				color: 'green',
				text: '25€'
			},
			{
				value: 100,
				color: 'black',
				text: '100€'
			},
			{
				value: 500,
				color: 'purple',
				text: '500€'
			},
			{
				value: 1000,
				color: 'orange',
				text: '1000€'
			},
			{
				value: 5000,
				color: 'grey',
				text: '5000€'
			},
		];
		this.tl = new TimelineLite();
		this.chipsEl = [];
	}

	componentDidMount() {
		this.tl.staggerFromTo(
			this.chipsEl,
			0.2,
			{
				y: 100,
				autoAlpha: 0
			},
			{
				y: 0,
				autoAlpha: 1
			},
			0.1
		);
	}

	selectChip(value) {
		if(this.context.credit >= value) {
			this.context.changeActiveBet(value);
		} else {
			console.log('not enough credit');
		}
	}

	render() {
		return (
			<div className="chips">
				{
					this.chips.map((chip, index) => {
						return <button
							key={chip.value}
							type="button"
							ref={c => this.chipsEl[index] = c}
							onClick={() => this.selectChip(chip.value)}
							className={`
								chip
								chip--${chip.color}
								${this.context.credit < chip.value ? 'chip--disabled' :''}
							`}>{chip.text}</button>;
					})
				}
			</div>
		);
	}
}

Chips.contextType = Context;

export default Chips;
