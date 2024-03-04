// import React, { Component } from 'react'

// export default class ToggleDemo extends Component {
//     state = {
//         flag : true
//     }
//     toggle = () => {
//         this.setState({ flag: !this.state.flag })
//     }
//   render() {
//     return <>
//             <h2 style = {{display: this.state.flag ? 'block' : 'none'}}>
//             This is a heading, plz click the below button to toggle me</h2>
//         <button  onClick={this.toggle}>
//             {this.state.flag ? 'HIDE' : 'SHOW'}
//         </button>
//     </>
//   }
// }
import React, { useState } from 'react'

export default function ToggleDemo() {
  let [flag, setFlag] = useState(true);

  const toggle = () => {
    setFlag(!flag)
} 
  return <>
    <h2 style = {{display: flag ? 'block' : 'none'}}>
       This is a Heading , Please click below to toggle me 
    </h2>
    <button onClick={toggle}>
      {flag ? 'DELETE' : 'SHOW'}      
    </button>
  </>
}
