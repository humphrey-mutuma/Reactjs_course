import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is react boy!</h1>
        <p>This is really working</p>

        <Person />
        
      </div>
    );
  }
}

export default App;
