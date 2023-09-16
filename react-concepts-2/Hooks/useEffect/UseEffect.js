// useEffect: allows you to perform side effectsin your components.
// Some examples of side effects are: fetching data from API end points, updating the DOM, and timers.
import React,{useState, useEffect} from "react";
function UseEffect(){
    const[count, setCount] = useState(0);
    useEffect( () => {
        document.title = `You clicked ${count} times`
    }
    )
    return(
        <div>
            <button onClick={() => setCount(count+1)}>Count {count}</button>
        </div>
    )
}
export default UseEffect; 