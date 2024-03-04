import React from 'react'

 function ComponentB({ b }) {
    console.log('B component is rendered...')
  return <>
    <div>ComponentB: b value is {b}</div>
  </>
}
export default React.memo(ComponentB)