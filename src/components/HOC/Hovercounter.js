import React, { useState } from 'react'
import CounterHoc from './CounterHoc'

 function Hovercounter({count, increment}) {
    // const [count, setCount] = useState(0);

    // const increment = () =>{
    //     setCount(count+1);
    // }

  return(
    <div>
        <h2>click hover- count is {count}</h2>
        <button onMouseOver={increment}>increment</button>
        </div>
  )
}
export default CounterHoc(Hovercounter);