// without JSX
// using createElement() and appendChild()
// createElement('tag name',attributes with name,'body of the element')
// attribute name: id,class
// Element created: <div id="id-hello" class="class-hello"> <h1>Without JSX</h1></div>

import React from "react";
function NoJsx(){
    return React.createElement("div",
    {id: "id-hello", className: "class-hello"},
    React.createElement('h1',null,'Without JSX'))
}
export default NoJsx


// function NoJsx(){
//     return React.createElement('div',null,React.createElement('h1',null,'Without JSX'))
// }