import React, { Component , PureComponent} from 'react'

export default class PureDemo extends PureComponent {
    state = {
        color: 'red'
    }
    changeColor = () => {
        this.setState({color: 'Red' });
    }
  render() {
    console.log('PureDemo Render() called' )  //if values are same then comp vl re render and purecmp vl not rerender
    return <>
        <h3>Color is: {this.state.color}</h3>
        <button onClick={this.changeColor}>change color</button>
    </>
  }
}
