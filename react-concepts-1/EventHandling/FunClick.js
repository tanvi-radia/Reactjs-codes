// Event Handling
import React from "react";
function FunClick() {
    function clickHandler() {
        return <h1>Button clicked</h1>
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
export default FunClick;

// Note: clickHandler is a function, not a function call so donot add paranthesis.