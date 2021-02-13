import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      {name:'Humphrey', age:23},
      {name:'Alex', age:22},
      {name:'Staphie', age:20}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is react boy!</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobbies: riding </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
  }
}

export default App;
