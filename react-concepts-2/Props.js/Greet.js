// Props using arrow function
// Props are arguments passed into React components.
// React Props are like function arguments in JavaScript and attributes in HTML.

import React from "react";
const Greet = (props) => 
        <h1>Hello {props.name} {props.surname}</h1>

// Note: either use curly brace or return keyword
// import React from "react";
// const Greet = (props) => 
//         <div><h1>Hello {props.name} {props.surname}</h1>
//         {props.children}</div>

// Using return ()
// import React from "react";
// const Greet = (props) => {
//     return (
//         <div> <h1>Hello {props.name} {props.surname}</h1>
//         {props.children}</div>
//     )
// }

export default Greet