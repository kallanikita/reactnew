// import React, { useState } from 'react'

// export default function PasswordDemo() {
//     let [flag, setFlag] = useState(true);

//     const toggle = () =>{
//         setFlag(!flag)
//     }

//   return <>
//   <input type = {flag ? 'password' : 'text'} />
//   <input type = 'checkbox' onClick={toggle} /> {flag ? 'SHOW' : 'HIDE' } password
//   </>
// }

import React, { Component } from 'react'

export default class PasswordDemo extends Component {
    state = {
        flag : true
    }
    toggle = () => {
        this.setState({flag: !this.state.flag})
    }
  render() {
    return <>
        <input type ={this.state.flag ? 'password' : 'text'} />
        <input type= 'checkbox' onClick={this.toggle} />
        {this.state.flag ? 'Show' : 'Hide'} password
    </>
  }
}
