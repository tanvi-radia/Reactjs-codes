// State and setState()
// Syntax
// this.state
// constructor(){
// super()
// this.state = {body}
// }
// function(){
    // this.setState( {body} )
// }
import React, { Component } from "react";
class State_Class extends Component {
    constructor(){
        super()
        this.state ={
           message: "Welcome Visitor" 
        }
    }
    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render() {
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div> 
        )
    }
}
export default State_Class