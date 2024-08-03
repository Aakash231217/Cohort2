import React from 'react'
import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';

function useTodos(n){
  const[todos,setTodos] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos").then(res=>{
        setTodos(res.data.todos);
        setLoading(false);
      })
    },n*1000)
    axios.get("https://sum-server.100xdevs.com/todos").then(res=>{
      setTodos(res.data.todos);
      setLoading(false);
    })
    return ()=>{
      clearInterval(value)
    }
  },[n])
  return {todos,loading};
}

function App() {
 
  const {todos,loading} = useTodos(5);
  if(loading){
    return <div>Loading.....</div>
  }
  return (
    <>
   {todos.map(todo=><Track todo={todo}/>)}
    </>
  )
}

function Track({todo}){
  return <div>
    {todo.title}
    <br/>
    {todo.description}
  </div>
}

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {count:0};
  }
  incrementCount = ()=>{
    this.setState({count:this.state.count+1})
  }
  render(){
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}


function Component() {
  useEffect(()=>{
    console.error("Compoent mounted");

    return ()=>{
      console.log("component unmounted")
    }
  },[]);
  return <div>
    From inside my component
  </div>
}


export default App
