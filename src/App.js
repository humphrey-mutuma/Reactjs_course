import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = (props) => {

  const [personsState, setPersonsState ] = useState({
    persons:[
      {name:'Humphrey', age:23},
      {name:'Alex', age:22},
      {name:'Staphie', age:20}
    ]
  });
  
  const [otherState, setOtherState ] = useState('Some other state')

  const switchNameHandler = () => {
    // console.log('I was clicked')
    setPersonsState( {
      persons:[
        {name:'Mutuma', age:23},
        {name:'Aleqii', age:22},
        {name:'stephie', age:20}
      ] 
    })
  }

    return (
      <div className="App">
        <h1>This is react boy!</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>

        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> Hobbies: riding </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

      </div>
    );
}

export default app;
