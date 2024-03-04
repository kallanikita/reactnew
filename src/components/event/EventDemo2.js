import React, { useState } from 'react'

export default function EventDemo2() {
    let [obj, setObj] = useState({ num1: 0, num2: 0});

    const changeHandler =(e) =>{
        console.log(e.target);
        setObj({...obj, [e.target.name] : +e.target.value})
    }
  return <>
        <p>Number1: <input name='num1' value= {obj.num1} onChange={(e)=> changeHandler(e)} /></p>
        <p>Number2 : <input name='num2' value= {obj.num2} onChange={(e) => changeHandler(e)}/></p> 
        <p>Addition of num1 and num2 is {obj.num1+obj.num2}</p>
  </>
}