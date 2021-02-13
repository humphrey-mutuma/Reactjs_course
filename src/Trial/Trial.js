import React, { Component } from 'react'

export class Trial extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Humphrey',
            age:23
        }
    }
    render() {
        return (
            <div>
                <h1>The Trial component working</h1>
                <p>My name is: {this.state.name}</p>
                <p>My age : {this.state.age}</p>
                <h5>This is component number : {this.props.number}</h5>
            </div>
        )
    }
}

export default Trial
