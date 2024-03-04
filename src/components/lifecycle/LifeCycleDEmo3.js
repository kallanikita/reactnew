import React, { Component } from 'react'
import ComponentA from '../memo1/ComponentA'
import ComponentB from '../memo1/ComponentB'

export default class LifeCycleDEmo3 extends Component {
    state ={
        flag: true
    }
  render() {
    return <>
        <div>plz change flag value to load component conditionally</div>
        <button onClick={()=> { this.setState({flag: !this.state.flag }) }}>toggle flag</button>
        {this.state.flag ?  <ComponentA /> : <ComponentB />}
    </>
  }
}
