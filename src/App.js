import React from 'react';
//import './App.css';
import GuessedWords from './components/congrats/GuessedWords'
import Congrats from './components/congrats/congrats'
import Input from './components/input/input'

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true}/>
      <GuessedWords
        guessedWords={[
          {
            guessedWord: 'trouble',
            letterMatchCount: 4
          }
        ]}
      />
    </div>
  );
}

export default App;
