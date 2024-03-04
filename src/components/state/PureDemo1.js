import React,{useState} from 'react'

export default function PureDemo1() {
let [color, setColor] = useState('red');

  return <>
  {console.log(' PureDemo render() called')}  // functional comp is  purecmp(if values are same it vl not re render)
        <h3>color is: {color} </h3>
        <button onClick={() => setColor('red')}>change Color</button>
  </>
}
