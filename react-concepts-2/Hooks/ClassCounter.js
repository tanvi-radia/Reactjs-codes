// As, state can only be used in class components.
// But, using hooks we can use state in functional components
// useState Hook
import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>Count = {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter;
