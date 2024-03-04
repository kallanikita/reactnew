import React, {useState} from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export default function MemoParent1() {
    const [a,setA] = useState(100);
    const [b,setB] = useState(200);
    const [c,setC] = useState(300);
  
  return <>
    <button onClick={()=> setA(a+1)}>Update A</button>
    <button onClick={()=> setB(b+1)}>Update B </button>
    <button onClick={()=> setC(c+1)}>Update C</button>

    <ComponentA a = {a}/>
    <ComponentB b = {b}/>
    <ComponentC c = {c}/>
  </>
}
