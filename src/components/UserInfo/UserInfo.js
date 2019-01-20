import React from 'react';
import { PropTypes } from 'prop-types';

const UserInfo = ({credit, activeBet}) => {
	return (
		<div>
			credit: {credit} | activeBet {activeBet}
		</div>
	);
};

UserInfo.propTypes = {
	credit: PropTypes.number,
	activeBet:PropTypes.number
};

export default UserInfo;
