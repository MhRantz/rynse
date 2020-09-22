import React, { useState } from 'react';
import Header from './components/Header';
import Habits from './components/Habits';
import TrackerBar from './components/TrackerBar';

function App() {
  const [habit, setHabit] = useState(false);
  
  const neat = [
    {
      day: '01/01/2020',
      habits: {walk: true, water: false, read: true}
    },
    {
      day: '01/02/2020',
      habits: {walk: true, water: false, read: false}
    },
    {
      day: '01/03/2020',
      habits: {walk: false, water: true, read: false}
    }
  ]

  const cool = () => {
    console.log(Object.values(neat[0].habits));
  }

  cool();

  return (
    <div className="app">
      <Header />
      <button onClick={() => setHabit(!habit)}>Switch</button>
      {
        habit ? <Habits /> : null
      }

      {
        neat.map(lol =>{
          return <div>
            <span>{lol.day}</span>
            <TrackerBar habits={Object.values(lol.habits)} />
            </div>
        })
      }
      
    </div>
  );
}

export default App;
