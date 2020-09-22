import React from 'react';
import Card from './Card';

const Hand = (props) => {
	return (
		<div>
			<h2>Hand {props.name}</h2>
			<ul>
				{
					props.hand.map(char => {
						return <Card char={char} onClick={props.onClick}/>
					})
				}
			</ul>
		</div>
	)
}

export default Hand;