import React, { useState } from 'react';

import { DigitalClock } from './components';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('Greetings Earthlings');
  const [number, setNumber] = useState(0);

  const manipulateState = (ev) => {
    //console.log(`I can click: ${ev.target}`);
    setNumber(number + 1);
    setMessage(`Greetings Earthlings: ${number} time!`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DigitalClock />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
        <button onClick={(ev) => manipulateState(ev)}>Manipulate State</button>
      </header>
    </div>
  );
}

export default App;
