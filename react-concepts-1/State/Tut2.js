// import React from "react";
import React, { useState } from "react";
function Tut2(){
    let [data,setData] = useState("function not called");
    // let data = "function not called";
    function update(){
        // data = "function called"
        // alert(data);
        setData("function called");
    }
        return(
            <div>
                <h1>{data}</h1>
                <button onClick={update}>Click Me</button>
            </div>
        )
}
export default Tut2;