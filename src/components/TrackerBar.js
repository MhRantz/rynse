import React from 'react';

const TrackerBar = (props) => {
	return (
		<ul className='trackerBar'>
			{
				props.habits.map(habit => {
					return <>{
						habit 
						? <li className={'habitUnit done'}></li> 
						: <li className={'habitUnit notDone'}></li> }</>
				})
			}
		</ul>
	)
}

export default TrackerBar;