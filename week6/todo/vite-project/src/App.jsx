import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=4;
function App() {
   const [todos, setTodos] = useState([{
    title:"go to gym",
    description:"go to gym today",
   },
   {
    title:"eat food",
    description:"Go to restaurant",
   },
   {
    title:"Go to class",
    description:"Shitt! going to college",
   },]);

   function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
   }
  return (
    <>
    <button onClick={addTodo}>Add a Todo</button>
     {todos.map(todo=><Todo key={todo.id} title={todo.title} description = {todo.description}/> )}
    </>
  )
}

function Todo({title,description}){
  return (
    <>
    <h1>
      {title}
    </h1>
    <h5>
      {description}

    </h5>
    </>
  )
}
export default App
