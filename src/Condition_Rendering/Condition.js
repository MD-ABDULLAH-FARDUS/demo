import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

export default class Condition_Rendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    

    render() {
        const {isLoggedIn} = this.state
         
        return (
            <div>
                {isLoggedIn && <HomePage />}
            </div>
        )
        
    } 
}
