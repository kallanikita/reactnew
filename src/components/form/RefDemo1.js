import React, { useRef } from 'react'

export default function RefDemo1() {
    let inputRef1 = useRef();
    let inputRef2 = useRef();

    const add =()=>{
        const val1 = +inputRef1.value;
        const val2 = +inputRef2.value;
        alert(val1+val2);
    };

  return <>
    <div>
        num1: <input ref={ inputBox => {inputRef1 = inputBox }} />
        num2: <input ref={ inputBox => {inputRef2 = inputBox }} />
        <button onClick={add}>Add</button>
    </div>
  </>
}
