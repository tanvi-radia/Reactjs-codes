// As, state can only be used in class components.
// But, using hooks we can use state in functional components
// useState() Hook: allows to track state in a function component.
import React,{useState} from "react";

function UseState1() {
  const [count,setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count: {count}</button>
    </div>
  )
}
export default UseState1