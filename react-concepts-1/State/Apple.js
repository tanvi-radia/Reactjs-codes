// Why we use state + Function Calls (Normal + Arrow)
import React from "react";
let data = "function call not working";
function call(){
    data = "function call working";
    alert(data);
}

// Normal function call
function Apple(){
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={call}>Click Me</button> 
        </div>
    )
}
export default Apple;
