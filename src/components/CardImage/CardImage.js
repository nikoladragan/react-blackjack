import React from 'react';
import { PropTypes } from 'prop-types';

import {ReactComponent as Card1Hearts } from './../../assets/images/cards/1-Hearts.svg';
import {ReactComponent as Card1Spades } from './../../assets/images/cards/1-Spades.svg';
import {ReactComponent as Card1Clubs } from './../../assets/images/cards/1-Clubs.svg';
import {ReactComponent as Card1Diamonds } from './../../assets/images/cards/1-Diamonds.svg';
import {ReactComponent as Card2Hearts } from './../../assets/images/cards/2-Hearts.svg';
import {ReactComponent as Card2Spades } from './../../assets/images/cards/2-Spades.svg';
import {ReactComponent as Card2Clubs } from './../../assets/images/cards/2-Clubs.svg';
import {ReactComponent as Card2Diamonds } from './../../assets/images/cards/2-Diamonds.svg';
import {ReactComponent as Card3Hearts } from './../../assets/images/cards/3-Hearts.svg';
import {ReactComponent as Card3Spades } from './../../assets/images/cards/3-Spades.svg';
import {ReactComponent as Card3Clubs } from './../../assets/images/cards/3-Clubs.svg';
import {ReactComponent as Card3Diamonds } from './../../assets/images/cards/3-Diamonds.svg';
import {ReactComponent as Card4Hearts } from './../../assets/images/cards/4-Hearts.svg';
import {ReactComponent as Card4Spades } from './../../assets/images/cards/4-Spades.svg';
import {ReactComponent as Card4Clubs } from './../../assets/images/cards/4-Clubs.svg';
import {ReactComponent as Card4Diamonds } from './../../assets/images/cards/4-Diamonds.svg';
import {ReactComponent as Card5Hearts } from './../../assets/images/cards/5-Hearts.svg';
import {ReactComponent as Card5Spades } from './../../assets/images/cards/5-Spades.svg';
import {ReactComponent as Card5Clubs } from './../../assets/images/cards/5-Clubs.svg';
import {ReactComponent as Card5Diamonds } from './../../assets/images/cards/5-Diamonds.svg';
import {ReactComponent as Card6Hearts } from './../../assets/images/cards/6-Hearts.svg';
import {ReactComponent as Card6Spades } from './../../assets/images/cards/6-Spades.svg';
import {ReactComponent as Card6Clubs } from './../../assets/images/cards/6-Clubs.svg';
import {ReactComponent as Card6Diamonds } from './../../assets/images/cards/6-Diamonds.svg';
import {ReactComponent as Card7Hearts } from './../../assets/images/cards/7-Hearts.svg';
import {ReactComponent as Card7Spades } from './../../assets/images/cards/7-Spades.svg';
import {ReactComponent as Card7Clubs } from './../../assets/images/cards/7-Clubs.svg';
import {ReactComponent as Card7Diamonds } from './../../assets/images/cards/7-Diamonds.svg';
import {ReactComponent as Card8Hearts } from './../../assets/images/cards/8-Hearts.svg';
import {ReactComponent as Card8Spades } from './../../assets/images/cards/8-Spades.svg';
import {ReactComponent as Card8Clubs } from './../../assets/images/cards/8-Clubs.svg';
import {ReactComponent as Card8Diamonds } from './../../assets/images/cards/8-Diamonds.svg';
import {ReactComponent as Card9Hearts } from './../../assets/images/cards/9-Hearts.svg';
import {ReactComponent as Card9Spades } from './../../assets/images/cards/9-Spades.svg';
import {ReactComponent as Card9Clubs } from './../../assets/images/cards/9-Clubs.svg';
import {ReactComponent as Card9Diamonds } from './../../assets/images/cards/9-Diamonds.svg';
import {ReactComponent as Card10Hearts } from './../../assets/images/cards/10-Hearts.svg';
import {ReactComponent as Card10Spades } from './../../assets/images/cards/10-Spades.svg';
import {ReactComponent as Card10Clubs } from './../../assets/images/cards/10-Clubs.svg';
import {ReactComponent as Card10Diamonds } from './../../assets/images/cards/10-Diamonds.svg';
import {ReactComponent as CardJHearts } from './../../assets/images/cards/J-Hearts.svg';
import {ReactComponent as CardJSpades } from './../../assets/images/cards/J-Spades.svg';
import {ReactComponent as CardJClubs } from './../../assets/images/cards/J-Clubs.svg';
import {ReactComponent as CardJDiamonds } from './../../assets/images/cards/J-Diamonds.svg';
import {ReactComponent as CardQHearts } from './../../assets/images/cards/Q-Hearts.svg';
import {ReactComponent as CardQSpades } from './../../assets/images/cards/Q-Spades.svg';
import {ReactComponent as CardQClubs } from './../../assets/images/cards/Q-Clubs.svg';
import {ReactComponent as CardQDiamonds } from './../../assets/images/cards/Q-Diamonds.svg';
import {ReactComponent as CardKHearts } from './../../assets/images/cards/K-Hearts.svg';
import {ReactComponent as CardKSpades } from './../../assets/images/cards/K-Spades.svg';
import {ReactComponent as CardKClubs } from './../../assets/images/cards/K-Clubs.svg';
import {ReactComponent as CardKDiamonds } from './../../assets/images/cards/K-Diamonds.svg';

const CardImage = ({card}) => {
	const key = `${card.name}-${card.suit}`;
	// const key = '10-Hearts';
	const cardImage = () => {
		switch(key) {
		case '1-Hearts':
			return <Card1Hearts />;
		case '1-Spades':
			return <Card1Spades />;
		case '1-Clubs':
			return <Card1Clubs />;
		case '1-Diamonds':
			return <Card1Diamonds />;
		case '2-Hearts':
			return <Card2Hearts />;
		case '2-Spades':
			return <Card2Spades />;
		case '2-Clubs':
			return <Card2Clubs />;
		case '2-Diamonds':
			return <Card2Diamonds />;
		case '3-Hearts':
			return <Card3Hearts />;
		case '3-Spades':
			return <Card3Spades />;
		case '3-Clubs':
			return <Card3Clubs />;
		case '3-Diamonds':
			return <Card3Diamonds />;
		case '4-Hearts':
			return <Card4Hearts />;
		case '4-Spades':
			return <Card4Spades />;
		case '4-Clubs':
			return <Card4Clubs />;
		case '4-Diamonds':
			return <Card4Diamonds />;
		case '5-Hearts':
			return <Card5Hearts />;
		case '5-Spades':
			return <Card5Spades />;
		case '5-Clubs':
			return <Card5Clubs />;
		case '5-Diamonds':
			return <Card5Diamonds />;
		case '6-Hearts':
			return <Card6Hearts />;
		case '6-Spades':
			return <Card6Spades />;
		case '6-Clubs':
			return <Card6Clubs />;
		case '6-Diamonds':
			return <Card6Diamonds />;
		case '7-Hearts':
			return <Card7Hearts />;
		case '7-Spades':
			return <Card7Spades />;
		case '7-Clubs':
			return <Card7Clubs />;
		case '7-Diamonds':
			return <Card7Diamonds />;
		case '8-Hearts':
			return <Card8Hearts />;
		case '8-Spades':
			return <Card8Spades />;
		case '8-Clubs':
			return <Card8Clubs />;
		case '8-Diamonds':
			return <Card8Diamonds />;
		case '9-Hearts':
			return <Card9Hearts />;
		case '9-Spades':
			return <Card9Spades />;
		case '9-Clubs':
			return <Card9Clubs />;
		case '9-Diamonds':
			return <Card9Diamonds />;
		case '10-Hearts':
			return <Card10Hearts />;
		case '10-Spades':
			return <Card10Spades />;
		case '10-Clubs':
			return <Card10Clubs />;
		case '10-Diamonds':
			return <Card10Diamonds />;
		case 'J-Hearts':
			return <CardJHearts />;
		case 'J-Spades':
			return <CardJSpades />;
		case 'J-Clubs':
			return <CardJClubs />;
		case 'J-Diamonds':
			return <CardJDiamonds />;
		case 'Q-Hearts':
			return <CardQHearts />;
		case 'Q-Spades':
			return <CardQSpades />;
		case 'Q-Clubs':
			return <CardQClubs />;
		case 'Q-Diamonds':
			return <CardQDiamonds />;
		case 'K-Hearts':
			return <CardKHearts />;
		case 'K-Spades':
			return <CardKSpades />;
		case 'K-Clubs':
			return <CardKClubs />;
		case 'K-Diamonds':
			return <CardKDiamonds />;
		default:
			console.log('Bad Card', key);
			return null;
		}
	};

	return (
		<>
			{cardImage()}
		</>
	);
};

CardImage.propTypes = {
	card: PropTypes.shape({
		name: PropTypes.string,
		suit: PropTypes.string
	})
};

export default CardImage;
