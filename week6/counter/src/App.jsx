import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue,setInputValue] = useState(1);
  let count = useMemo(()=>{
    let finalCount = 0;
    for(let i = 1;i<=inputValue;i++){
        finalCount = finalCount+i;
    }
    return finalCount;
  },[inputValue]);

  return (
    <>
    <input onChange={function(e){
      setInputValue(e.target.value);
    }}></input>
    <br/>
    Sum from 1 to {inputValue}is {count}
    <br/>
    <button onClick={()=>{
      setCounter(counter+1);

    }}>Counter({counter})</button>
    </>
  )
}

export default App
