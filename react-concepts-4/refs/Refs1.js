// On refreshing the page input field should be focused
// 1. create ref: react.createRef() in super method in constructor
// 2. assign created refs to ref attribute
import React, { Component } from 'react'

class Refs1 extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
      </div>
    )
  }
}

export default Refs1
