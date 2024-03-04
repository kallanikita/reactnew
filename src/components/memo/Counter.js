import React from 'react'

function Counter({counter}) {
    console.log('Counter comp rendered...')
  return <>
    <h3>Counter value is {counter}</h3>
  </>
}
export default React.memo(Counter)   //if v use React.memo then if the state value changes then it vl not re-render. only the todo comp vl b re-rendered