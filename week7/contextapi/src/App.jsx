
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { CountContext } from './context'
import { useContext } from 'react'
import { useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
import { useMemo } from 'react'

function App() {

  return (
    <>
    <RecoilRoot>
    <Count/>
   
    </RecoilRoot>
    </>
  )
}

function Count(){
   return <div>
    <CountRendered/>
    <Buttons/>
   </div>
} 

function CountRendered(){
  const count  = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer/>
  </div>
}
function EvenCountRenderer(){
   {/*const count = useRecoilValue(countAtom)
    const isEven = useMemo(()=>{
      return count%2==0
  
    },[count])
   return <>
   {(isEven? "Yes i am even":"")}</>
*/}

const isEven = useRecoilValue(evenSelector);
 return <div>
  {isEven%2?"It is even":""}
 </div>
}
function Buttons(){
  const setCount = useSetRecoilState(countAtom);
    return <>
     <button onClick={()=>{
       setCount(count=>count+1)
     }}>Increase </button>

<button onClick={()=>{
   setCount(count=>count-1)
}}>Decrease </button>
    </>
}

export default App
