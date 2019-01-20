import React, { Component } from 'react';
import Chips from './components/Chips/Chips';
import Actions from './components/Actions/Actions';
import { Context } from './context';
import UserInfo from './components/UserInfo/UserInfo';

class App extends Component {
	componentDidMount() {
		console.log(this.context);
	}
	render() {
		const css = {
			height: `${window.innerHeight}px`
		};
		return (
			<div className="root" style={css}>
				<div className="header">
					<UserInfo credit={this.context.credit} activeBet={this.context.activeBet} />
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
