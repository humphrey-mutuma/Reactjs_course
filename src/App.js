import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Validation from './ValidationComponent/ValidationComponent'

class App extends Component {

  state = {
    persons:[
      {id:'fgas0',name:'Humphrey', age:23},
      {id:'dfgd1',name:'Alex', age:22},
      {id:'dfdf2',name:'Staphie', age:20}
    ],
    otherState:'some other state',
    showPersons: false,
    userInput:''
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons:persons });

  }

 deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
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
               click={() => this.deletePersonHandler(index)}
               name={person.name}
               age={person.age}
               key={person.id}
               changed={(event) => this.nameChangeHandler(event, person.id)}
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
          <hr/>
         <input 
              type="text"
              onChange={this.inputChangedHandler}
              value={this.state.userInput}
          />
          <p>{this.state.userInput}</p>

          <Validation inputLenth= {this.state.userInput.length} />
      </div>
    );
  }
}

export default App;
