import React, { Component } from 'react';
import EasyPlace from './EasyPlace.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">EasyPlace</h1>
        </header>
        <EasyPlace/>
      </div>
    );
  }
}

export default App;
