import React, { Component } from 'react';
import './App.css';
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

  switchNameHandler = (newName) => {
    // console.log('I was clicked')
    this.setState( {
      persons:[
        {name: newName, age:23},
        {name:'Aleqii', age:22},
        {name:'stephie', age:20}
      ]
    })
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
            this.state.persons.map(person => {
              return <Person 
               name={person.name}
               age={person.age}
              />
            })
          }
        {/* <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          />
        <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Hum')} 
            changed={this.nameChangeHandler}
            >
              Hobbies: riding  
        </Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/> */}
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
