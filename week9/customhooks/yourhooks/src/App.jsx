import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useIsOnline } from './hooks/useIsOnline'
import { useMousePointer } from './hooks/useMousePointer'

function useDebounce(value,timeout){
  const [debouncedValue,setDebouncedValue] = useState(value);
   useEffect(()=>{
    let timeoutNumber = setTimeout(()=>{
      setDebouncedValue(value)
    },timeout)
    return()=>{
      clearTimeout(timeoutNumber);
     }
   },[value]);
   return debouncedValue;
}

function App() {
  const [value,setVal] = useState(0);
  const debouncedValue = useDebounce(value,500);
  
  return(
    <>
    Debounced value is {debouncedValue}
    <input type="text" onChange={e=>setValue(e.target.value)}/>
    </>
  )
}
 {/* const isOnline = useIsOnline();
  const mousePointer = useMousePointer();
  return <div>
    Currently your mousepointer is at {mousePointer.x} and {mousePointer.y}
  </div>
  
  if(isOnline ){
    
    return "You are online Yay!!!"
    
  }
  return "You are offline, please connect to the internet"

  return (
    <>
     
    </>
  )
}
 */}

export default App;
