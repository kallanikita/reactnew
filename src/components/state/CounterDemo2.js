import React, {useEffect, useState} from 'react'

export default function CounterDemo2() {
    let [counter, setCounter] = useState(0);

    // let increment = () => {
    //     // setCounter(++counter)
    //     console.log(counter);
    // }
    let increment = () => {
        setCounter(counter + 1)
        }
    useEffect(() => {
        console.log(counter);
    })
    
    return <>
        <p>Counter value is {counter}</p>
        <button onClick={increment}>Increment</button>
    </>
}
