// Fetch data from API: 
// 1. install axios package
// 2. import axios library
// 3. the code for get request is placed in componentDidMount lifecycle method
import React, { Component } from 'react'
import axios from 'axios';
class Getrequest extends Component {
constructor(props) {
  super(props)

  this.state = {
     posts: []
  }
}

componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response)
        this.setState({posts: response.data})
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Getrequest