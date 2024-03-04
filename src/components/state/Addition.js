import React, {useState} from 'react'

export default function Addition() {
    const [num1 , setNum1] = useState('');
    const [num2 , setNum2] = useState('');
    const [result, setResult] = useState('')

    const addition = () => {
          const res1 = Number(num1)+ Number(num2)
          setResult(res1)
    }
    const substraction = () => {
      const res2 = Number(num1) - Number(num2)
      setResult(res2)
}
const multiplication = () => {
  const res3 = Number(num1) * Number(num2)
  setResult(res3)
}
const division = () => {
  const res4 = Number(num1) / Number(num2)
  setResult(res4)
}
  return <>
   <label first Number is/>
   <input type= "number" value= {num1} onChange={(e) => 
              setNum1(e.target.value)} />
    <label Second Number is/>
   <input type= "number" value= {num2} onChange={(e) => 
              setNum2(e.target.value)} />

     <button onClick={addition}>Add</button>     
      <label Addition is/>

      <button onClick={substraction}>Sub</button>     
      <label substraction is/>

      <button onClick={multiplication}>Mul</button>     
      <label multiplication is/>

      <button onClick={division}>Div</button>     
      <label division is/>

      <h2> Result of 2 Numbers is {result} </h2>
  </>
}

