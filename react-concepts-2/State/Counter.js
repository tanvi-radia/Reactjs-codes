// Set State method
import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increment() {
        // Note: Donot modify the state directly instead use setState() function
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        },
        // () => {
        //     console.log(this.state.count)
        // }
        )
        // console.log(this.state.count);
    }
  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter