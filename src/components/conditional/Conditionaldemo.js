import React from 'react'

export default function Conditionaldemo() {
  let n =7;
   if(n%2 === 0){
    return <h2>{n} is Even Number</h2>
   }else{
    return <h2>{n} is Odd Number</h2>
   }
 }
