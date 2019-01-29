import React from 'react';
import { PropTypes } from 'prop-types';

const UserInfo = ({credit, activeBet, userHand, dealerHand}) => {
	return (
		<div>
			credit: {credit} | activeBet {activeBet} | userHand {userHand} | dealerHand {dealerHand}
		</div>
	);
};

UserInfo.propTypes = {
	credit: PropTypes.number,
	activeBet:PropTypes.number,
	userHand:PropTypes.number,
	dealerHand:PropTypes.number
};

export default UserInfo;
