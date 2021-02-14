import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      {name:'Humphrey', age:23},
      {name:'Alex', age:22},
      {name:'Staphie', age:20}
    ],
    otherState:'some other state',
    showPersons: false,
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons:[
        {name: 'Humphrey', age:23},
        {name: event.target.value, age:22},
        {name:'stephie', age:20}
      ]
    })
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

  let persons = null;

  if(this.state.showPersons) {
     persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person 
               click={this.deletePersonHandler}
               name={person.name}
               age={person.age}
              />
            })
          }
       
      </div> 
     )
  }
    return (
      <div className="App">
        <h1>This is react boy!</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
         
         {persons}
      </div>
    );
  }
}

export default App;
