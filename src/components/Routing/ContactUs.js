// import React from 'react'
// import { useContext } from 'react'
// import { MyContext } from '../../utils/MyContext'


// export default function ContactUs() {
//   const contextData = useContext(MyContext);

//   return<>
//   <h2 className='text-center'>this is contact us component</h2>
//   <div>Name is {contextData.name}, Age is {contextData.age}</div>
// </>
// }
import React, { Component } from 'react'
import { MyContext } from '../../utils/MyContext'

export default class ContactUs extends Component {
  render() {
    return <>
    <MyContext.Consumer>
      {
        (userObj) => {
          return (
            <>
              <h2>This is ContactUs Component</h2>
              <p>Name is {userObj.name} , age is:{userObj.age}, address is {userObj.add}</p>
            </>
          )
        }
      }
    </MyContext.Consumer>
    </>
    }
}
