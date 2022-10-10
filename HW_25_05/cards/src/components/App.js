import Form from './Form';
import { users } from '../data/users';
import { useState } from 'react';
import CardsContainer from './CardsContainer';

function App() {
	const [cards, setCards] = useState(users);
	const addCard = (name, avatar) =>
		setCards([
			...cards,
			{
				id: Date.now(),
				name,
				avatar,
				status: true,
			},
		]);
	const del = (id) => {
		setCards(cards.filter((elem) => elem.id !== id));
	};
	const doubleClick = (id) =>
		setCards(
			cards.map((elem) => {
				elem.id === id
					? (elem.status = !elem.status)
					: (elem.status = elem.status);
				return elem;
			})
		);

	return (
		<div>
			<Form add={addCard} />
			<CardsContainer cards={cards} del={del} doubleClick={doubleClick} />
		</div>
	);
}

export default App;
