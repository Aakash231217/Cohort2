
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { CountContext } from './context'
import { useContext } from 'react'
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

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
  </div>
}

function Buttons(){
  const [count,setCount] = useRecoilState(countAtom);
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
