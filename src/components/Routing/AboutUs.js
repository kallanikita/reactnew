import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AboutUs() {
const Navigate = useNavigate();

  const gotoHomePage = () =>{
    console.log('Do Something');
    Navigate('/home')
  }
return <>
   <h2>this is about us component</h2>
  <a href='/home'>go to home page</a>
  <Link to="/home" className='mx-1'>go to home</Link>
  <button onClick={gotoHomePage}>Do Something and go to home</button>  
   <button onClick={()=> Navigate(-1)}>Go Back</button>
    <button onClick={()=> Navigate(1)}>Go Next</button>
  </>
}
