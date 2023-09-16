// useEffect() run conditionally: only when count value in the array changes
// useEffect() will not run after every render() but will run conditionally
import React, {useState, useEffect} from 'react'

 function UseEffectone() {
    const[count, setCount] = useState(0)
    const[name, setName] = useState('')
    // [count] is an array and if value of count changes then only useEffect is executed
    useEffect(() => {
        console.log(`Updated`)
        document.title = `You clicked ${count} times`;
    },[count])
  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count+1)}>Count {count}</button>
    </div>
  )
}
export default UseEffectone;

// Note: just see output on console on removing [count] array and adding that array