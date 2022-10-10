import React from 'react';
import Card from './Card';

export default function CardsContainer({ cards, del, doubleClick }) {
	const cardsContainerStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridAutoRows: '400px',
		gap: '10px',
		margin: '50px 0',
	};

	return (
		<div style={cardsContainerStyle}>
			{cards.map((card) => (
				<Card key={card.id} del={del} doubleClick={doubleClick} {...card} />
			))}
		</div>
	);
}
