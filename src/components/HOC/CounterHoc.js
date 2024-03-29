import React, { useState } from 'react'

export default function CounterHoc(InputComponent) {
    function UpdatedComponent(){
        const [count, setCount] = useState(0);
        const increment = () =>{
        setCount(count+1);
    }
    return <InputComponent count={count} increment={increment} />
    }
    return UpdatedComponent;
 }
