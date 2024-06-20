import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'

function App() {
  const [ selectedID, setSelectedID] = useState(1);
   return <div>
      <button onClick={function(){
        setSelectedID(1)
      }}>1</button>
      <button onClick={function(){
        setSelectedID(2)
      }}>2</button>
      <button onClick={function(){
        setSelectedID(3);
      }}>3</button>
      <Todo id={selectedID}/>
   </div>
}


function Todo({id}){
  const [todo,setTodo]  = useState({});
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(response=>{
      setTodo(response.data.todo)
    })
  },[id])
  return <div>
    ID:{id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}
export default App
