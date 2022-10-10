import React from 'react';

export default function Card({ id, name, avatar, status, del, doubleClick }) {
	const nameDoubleClick = status ? name : '******  ******';
	const avatarDoubleClick = status ? avatar : '../../media/no_face.png';

	const cardStyle = {
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '30px',
		borderRadius: '10px',
		border: '1px solid black',
	};

	const avatarStyle = {
		width: '200px',
		height: '200px',
		objectFit: 'cover',
	};

	return (
		<div style={cardStyle} onDoubleClick={() => doubleClick(id)}>
			<img src={avatarDoubleClick} alt='img' style={avatarStyle} />
			<p>{nameDoubleClick}</p>
			<button onClick={() => del(id)}>Remove</button>
		</div>
	);
}
