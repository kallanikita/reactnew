import React, {useState} from 'react'
import ToDo from './ToDo';
import Counter from './Counter';

export default function MemoParent() {
    let [counter, setCounter] = useState(0);
    let [todos, setTodos] = useState(['Todo-1' , 'Todo-2']);

    const addToDo = () =>{
        todos.push('new todo')
        setTodos([...todos])
    }

  return <>
  <h3>This is parent memo</h3>
  <button onClick={()=> setCounter(counter+1)}>change counter</button>
  <button onClick={addToDo} className='mx-1'>add todos</button>

  <Counter counter = {counter} />
  =============================================
  <ToDo todos={todos} />  // in this 2 components r there if state value vl change then the 2 comp vl b rendered so to avoid this we use React.memo method
  </>
}
