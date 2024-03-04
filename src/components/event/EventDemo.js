import React, { Component } from 'react'

export default class EventDemo extends Component {
  f1 = () =>{
    console.log('I am F1');
  }
  add = (a, b)=> {
    console.log(`Addition of ${a} and ${b} is ${a+b}`)
  }
  render(){
    return <>
            <button onClick={this.f1} className='btn btn-primary'>btn-1</button>
            <button onClick={()=>{this.add(2,3)}} className='btn btn-primary m-1'>Add</button>
    </>
  }
}
