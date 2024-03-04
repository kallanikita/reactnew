import React, { useState } from 'react'

export default function Increment() {
  const [count, setCount] = useState(0);

  return<>
        <div id='div1'>Count value is {count}</div>
        <button onClick={() => { setCount(count + 1) }}>Increment</button>
    </>
  }
