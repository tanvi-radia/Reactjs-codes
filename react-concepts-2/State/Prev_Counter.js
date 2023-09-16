// prevState 
import React, { Component } from 'react'

class Prev_Counter extends Component {
    constructor(){
        super()
            this.state = {
                count: 0
        }
    }
    increment (){
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState(prevState => ({
          count: prevState.count + 1
        }))
    }
    // React will combine multiple setState calls to single solution.
    // To increment by 5
    incrementFive (){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Prev_Counter