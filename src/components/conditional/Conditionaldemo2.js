import React from 'react'

export default function Conditionaldemo2() {
 let cars = ['tata', 'maruti', 'honda'];

 return <div>
    {cars.length > 0 && <h2> You have {cars.length} cars</h2>}
 </div>
}
