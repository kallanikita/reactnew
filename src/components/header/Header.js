// import React from 'react'

// export default function Header() {
//   return 
//     <h1 style= {{backgroundColor: 'purple', color:'white', textAlign:'center', margin:0}}>
//          Flipkart Header Page
//     </h1>
// }

import React, { Component } from 'react'

export default class header extends Component {
  render() {
    console.log(React.version);
    return ( <div style= {{backgroundColor: 'purple', color:'white', textAlign:'center', margin:0}}>Header</div> )
  }
}

// import React from 'react'

// export default class header extends React.Component{
//   render(){
//     return <h1>This is my header</h1>
//   }
// }

export function addition(a,b){
  console.log(a+b);
}