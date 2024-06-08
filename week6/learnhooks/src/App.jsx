import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <HeaderWithButton/>
    <Header title="Singh"></Header>
    <Header title="Mine"></Header>
    <Header title="No one"></Header>
    </>
  )
}

function HeaderWithButton(){
  const [title,setTitle] = useState("My full name Aakash Singh");

 function updateTitle(){
    setTitle("My name is"+Math.random())
 }
  return (
       <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
