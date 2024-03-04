import React, { useState } from 'react'

export default function StateDropDown() {
  const stateNames=['Hyderabad', 'Goa', 'Kerala', 'Puri', 'Vizag'];
  const [selectedState , setSelectedState] = useState(stateNames[0]);

 const stateChanged = (e) => {
    setSelectedState(e.target.value)
  }

  return <>
  <select onChange={stateChanged}>
      {stateNames.map((state, ind) => {
          return <option key={ind}>{state}</option>
      })}
  </select>
      <h2>you have selected State: {selectedState}</h2>
  </>
}
