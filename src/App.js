import React, { Component } from 'react';
import './App.css';
import Gameboard from './gameboard/gameboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Memory game</p>
        </header>

        <Gameboard />
      </div>
    );
  }
}

export default App;
