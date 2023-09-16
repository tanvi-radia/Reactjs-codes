// useState with prevState
import React, {useState} from 'react'

function UseStateTwo() {
  const [count,setCount] = useState(0);
  
  const incrementFive = () => {
    for(let i=0; i<5; i++){
        // increment value by 1
        // setCount(count+1)
        // increment value by 5
        setCount(prevCount => prevCount + 1);
    }
  }
  return (
    <div>
      Count: {count}
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}
export default UseStateTwo;