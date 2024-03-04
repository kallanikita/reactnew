import React from 'react'

export default function CounterDemo1() {
    let counter =0;
   let  increment =() => {
        counter++;
        console.log(counter);
    }
  return <>
        <h2>This is a counter Demo</h2>
        <hr />
        <p>
            <button onClick={increment}>Increment</button>
        </p>
  </>
}
