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

        <Person name='Humphrey' age='23'/>
        <Person name='Alex' age='22' > Hobbies: riding </Person>
        <Person name='Steph' age='20'/>

      </div>
    );
  }
}

export default App;
