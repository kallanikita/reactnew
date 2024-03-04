import React, { Component } from 'react'

export default class CounterDemo extends Component {
    counter = 0;

    increment=()=> {
        this.counter = this.counter + 1;
        console.log(this.counter)
        this.forceUpdate();
    }
    
    render() {
    return <>
    <h2> This is a counter demo</h2>
    <hr />
    <div>Counter value is: {this.counter}</div>
    <p>
        <button onClick={this.increment}>Increment</button>
    </p>
    </>
}

}