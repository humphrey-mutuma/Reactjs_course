import React, { Component } from 'react';
import styled from 'styled-components'
// import Radium , {StyleRoot}from 'radium'
import classes from './App.css';
import Person from './Person/Person'

// const StyledButton = styled.button`
//      backgroundColor:${props => props.alt ? 'red' : 'green'};
//      color:white;
//      font:inherit;
//      border:1px solid blue;
//      padding:8px;
//      cursor:pointer;

//      &:hover {
//        backgroundColor:${props => props.alt ? 'salmon' : 'lightgreen'};
//        color:black;
//      }
// `;

class App extends Component {

  state = {
    persons:[
      {id:'fgas0',name:'Humphrey', age:23},
      {id:'dfgd1',name:'Alex', age:22},
      {id:'dfdf2',name:'Staphie', age:20}
    ],
    otherState:'some other state',
    showPersons: false,
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

  render() {
  //   const style = {
  //     backgroundColor:'green',
  //     white:'white',
  //     font:'inherit',
  //     border:'1px solid blue',
  //     padding:'8px',
  //     cursor:'pointer',
  //     ':hover': {
  //       backgroundColor:'lightgreen',
  //       color:'black'
  //     }
  //   };

  let persons = null;
  let btnClasss = '';

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
     );

     btnClasss.classes.Red;
  }

  const assignedClasses = [];
  if(this.state.persons.length <=2) {
    assignedClasses.push(classes.red); //classes will be red
  }
  if(this.state.persons.length <=1) {
    assignedClasses.push(classes.bold); //classes will be red and bold
  }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>This is react boy!</h1>
          <p className={assignedClasses}>This is really working</p>
          <button
            className={btnClasss.join(' ')}
            // style={style}
            // alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          
          {persons}
        </div>
      // </StyleRoot>

    );
  }
}

export default App;
