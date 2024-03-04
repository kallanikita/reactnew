import React, { useState } from 'react'
import CounterHoc from './CounterHoc'

 function ClickCounter({count, increment}) {
    // const [count, setCount] = useState(0);

    // const increment = () =>{
    //     setCount(count + 1);
    // }
  return (
    <div>
      <h2>click counter- count is {count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  )
}
export default CounterHoc(ClickCounter);