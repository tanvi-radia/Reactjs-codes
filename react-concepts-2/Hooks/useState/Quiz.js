// design three buttons reset, increment, decrement using useState hook
// increment: should increment value by 1
// decrement: should decrement value by 1
// reset: should set the value to 0
import React, {useState} from 'react'

function Quiz() {
    const initial_count = 0
    const [count,setCount] = useState(0);
  return (
    <div>
       Count: {count}
      <button onClick={()=> setCount(initial_count)}>reset</button>
      <button onClick={()=> setCount(count+1)}>increment</button>
      <button onClick={()=> setCount(count-1)}>decrement</button>
    </div>
  )
}
export default Quiz