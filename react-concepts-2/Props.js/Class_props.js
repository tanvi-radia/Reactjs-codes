import React, { Component } from "react";
class Class_props extends Component{
    render(props) {
        return (
            <div>
            <h1>This is {this.props.name} {this.props.surname}</h1>
            {/* {this.props.children} */}
            </div>
        )
    }
}
export default Class_props;