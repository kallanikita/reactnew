import React from 'react'

export default function ToDo({ todos }) {
    console.log('ToDo comp rendered...')
  return <>
  {todos.map((todo,ind)=> {
    return  <div key={ind}>{todo}</div>
  })}
  </>
}
