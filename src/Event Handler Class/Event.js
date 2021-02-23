import React, { Component } from 'react'

export default class Event extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }
    
    handleOnChange = (e) => {
       this.setState({
           changedValue: e.target.value
       }, ()=> {
           console.log(this.state.changedValue)
       } )
    }

    render() {
        return (
           <div>
               <input type='text' onChange={this.handleOnChange}></input>
               <h3>{this.state.changedValue}</h3>
           </div>
        )
    }
}
