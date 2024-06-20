import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'
import { memo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const inputFunction = useCallback(()=>{
    console.log("Hi there");
  })

  return (
    <>
      <ButtonComponent/>
      <button onClick={()=>{
        setCount(count+1)
      }}>Click ME{count}</button>
    </>
  )
}

const ButtonComponent = memo(({inputFunction})=>{
  console.log("Child rerender");
  return<div>
    <button>Button clicked</button>
  </div>
})

export default App
