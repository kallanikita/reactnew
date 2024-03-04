import React from 'react'

export default function Databindingdemo() {
  let user = {
    firstName: 'sanjay',
    lastName: 'sahu'
  };
  return <>
    <h2>This is data binding method</h2>
    <div>your name is ::{user.firstName}</div>
    <div>current react version is {React.version}</div>
    <div>{2 + 4 * 7}</div>
  </>
  }

