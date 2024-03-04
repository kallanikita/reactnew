import React, { useContext } from 'react'
import { MyContext } from '../../utils/MyContext';


export default function Home(props) {
  const contextData = useContext(MyContext);
  console.log(contextData);
  contextData.age = 46;
  console.log(contextData)
  
  return <>
  <h2>This is home component</h2>
  <p>the name is {props.name}</p>
  <div>Name is {contextData.name} , age is {contextData.age}</div>
  </>
}
