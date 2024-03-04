import React from 'react'

export default function ComponentC({ c }) {
    console.log('C component is rendered...')
  return <>
    <div>ComponentC: c value is {c}</div>
  </>
}
// export default React.memo(ComponentC) //here c vl be re rendered. a and b vl not re render