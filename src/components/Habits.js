import React, { useState } from 'react';

const Habits = () => {

	const [today, setToday] = useState();

	const findNow = () => {
		let dateNow = new Date();
		return dateNow.getFullYear();
	}

	findNow();

	return (
		<div>
			<h2>Its Habits</h2>
				<h4>{findNow()}</h4>
		</div>
	)
}

export default Habits; 