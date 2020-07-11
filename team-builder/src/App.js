import React,{useState} from 'react';
import logo from './logo.svg';
import Form from './components/Form';


import './App.css';

function App() {
  const [teamList,SetTeamList]=useState([]);
  return (
    <div className="App">
     
      <header className="App-header">
      <h1>Teamlist</h1>
        <Form teamList={teamList} SetTeamList={SetTeamList}/>
        
      </header>
    </div>
  );
}

export default App;
