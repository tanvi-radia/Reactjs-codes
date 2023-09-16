// State in class component
import React, {Component} from "react";
class Tut3 extends Component{
    // Initialization of variable
    constructor(){
        super();
        this.state={
            data: "Initial Value"
        }
    }
    display(){
        // Updating Value
        this.setState({data:"Value changed"})
        alert("Value changed");
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.display()}>Update Value</button>
            </div>
        )
    }
}
export default Tut3;