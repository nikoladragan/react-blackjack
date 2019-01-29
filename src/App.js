import React, { Component } from 'react';
import Chips from './components/Chips/Chips';
import Actions from './components/Actions/Actions';
import { Context } from './context';
import UserInfo from './components/UserInfo/UserInfo';
import UserCards from './components/UserCards/UserCards';
import DealerCards from './components/DealerCards/DealerCards';

class App extends Component {
	render() {
		const css = {
			height: `${window.innerHeight}px`
		};
		return (
			<div className="root" style={css}>
				<div className="header">
					<UserInfo
						credit={this.context.credit}
						activeBet={this.context.activeBet}
						userHand={this.context.userHand}
						dealerHand={this.context.dealerHand}
					/>
				</div>
				<div className="game">
					<UserCards />
					<DealerCards />
				</div>
				<div className="footer">
					<Actions />
					{this.context.started && <Chips />}
				</div>
			</div>
		);
	}
}

App.contextType = Context;

export default App;
