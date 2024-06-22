import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={count}>
    <Count setCount={setCount}/>
    </CountContext.Provider>
   
    </>
  )
}

function Count({setCount}){
   return <div>
    <CountRendered/>
    <Buttons setCount={setCount}/>
   </div>
} 

function CountRendered(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext);
    return <>
     <button onClick={()=>{
       setCount(count+1)
     }}>Increase </button>

<button onClick={()=>{
   setCount(count-1)
}}>Decrease </button>
    </>
}

export default App
