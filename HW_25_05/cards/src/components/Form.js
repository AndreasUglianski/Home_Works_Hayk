import React from 'react';

export default function Form({ add }) {
	const formStyle = {
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center',
	};
	const inputStyle = {
		width: '200px',
		height: '40px',
		margin: '50px ',
		padding: '10px',
		borderRadius: '3px',
		border: '1px solid black',
		fontSize: '16px',
	};
	const btnStyle = {
		width: '230px',
		height: '60px',
		margin: '50px ',
		padding: '10px',
		cursor: 'pointer',
		borderRadius: '3px',
		border: '1px solid black',
		fontSize: '25px',
		backgroundColor: 'white',
	};

	const submit = (event) => {
		event.preventDefault();
		const { name, photo } = event.target;
		add(name.value, photo.value);
		name.value = '';
		photo.value = '';
	};

	return (
		<div style={formStyle}>
			<form onSubmit={submit}>
				<input
					placeholder='Enter name'
					name='name'
					type='text'
					style={inputStyle}
				/>
				<input
					placeholder='Your photo'
					name='photo'
					type='text'
					style={inputStyle}
				/>
				<button style={btnStyle}>Добавить</button>
			</form>
		</div>
	);
}
