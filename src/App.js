import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<>
				<div className="header"></div>
				<div className="footer">
					<div className="actions">
						<button type="button" className="button">Hit</button>
						<button type="button" className="button">Stand</button>
						<button type="button" className="button">Split</button>
						<button type="button" className="button">Double</button>
						<button type="button" className="button">Insurance</button>
						<button type="button" className="button">Surrender</button>
					</div>
					<div className="chips">
						<div className="chip chip--peach">0.25€</div>
						<div className="chip chip--white">1€</div>
						<div className="chip chip--pink">2.5€</div>
						<div className="chip chip--red">5€</div>
						<div className="chip chip--blue">10€</div>
						<div className="chip chip--yellow">20€</div>
						<div className="chip chip--green">25€</div>
						<div className="chip chip--black">100€</div>
						<div className="chip chip--purple">500€</div>
						<div className="chip chip--orange">1000€</div>
						<div className="chip chip--grey chip--disabled">5000€</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;
