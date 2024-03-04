import React, { Component } from 'react'

export default class StateDemo1 extends Component {
   constructor(props) {
     super(props)
     this.state = {     //state is pre defined
        counter : 0  // state variable
     }
   }
   
    increment=()=> {
        this.setState({counter: this.state.counter + 1},() => {   //setState() is asynchronous
                  console.log(this.state.counter)
            });
         }
    
    render() {
    return <>
    <div>Counter value is: {this.state.counter}</div>
    <p>
        <button onClick={this.increment}>Increment</button>
    </p>
    </>
}

}
