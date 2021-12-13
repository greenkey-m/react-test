import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Description from './Description';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name='Some test'/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Description countBy={3} />
    </div>
  );
}

export default App;
