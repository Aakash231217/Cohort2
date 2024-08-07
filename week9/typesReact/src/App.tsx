import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 return(
  <>
  <Todo title="Go to gym" description='Go' done={false}/>
  </>

  )
}

interface TodoProp{
  title:string,
  description:string,
  done:boolean,
}

function Todo(props:TodoProp){
  return <div>
    <h1>
      {props.title}
    </h1>
    <h3>{props.description}</h3>
    </div>
}
export default App
