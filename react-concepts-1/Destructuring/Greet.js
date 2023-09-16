// Destructuring props and state
// Destructuring is a characteristic of JavaScript, It is used to take out sections of data from an array or objects, We can assign them to new own variables created by the developer.
import React from "react";
function Greet({name,surname}){
            return <h1>This is {name} {surname}</h1>
}
export default Greet;