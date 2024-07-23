import React from 'react';
import Countdown from './Countdown'; 
import './App.css';

function App() {
  const targetDate = '2024-08-30T00:00:00';
  const eventTitle = 'Olympos & Kaş Tatili için';

  return (
    <div className="App">
      <header className="App-header">
        <Countdown targetDate={targetDate} eventTitle={eventTitle} />
      </header>
    </div>
  );
}

export default App;