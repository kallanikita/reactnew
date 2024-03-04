import React, { Component } from 'react'

export default class GreetDemo extends Component {
  render() {
    return <>
        <h2>Hi {this.props.name}, {this.props.msg}</h2>
        <h3>{this.props.children}</h3>
    </>
  }
}
