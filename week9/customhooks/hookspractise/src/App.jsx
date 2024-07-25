import React from 'react'
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const[render,setRender] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },10000)
  },[])

  return (
    <>
   {render?<Component/>:<div></div>}
    </>
  )
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
