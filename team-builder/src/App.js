import React,{useState} from 'react';
import logo from './logo.svg';
import Form from './components/Form';

import './App.css';

function App() {
  const [teamList,SetTeamList]=useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>RegisterTeam</h1>
          <Form members={teamList} />
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
    </div>
  );
}

export default App;
