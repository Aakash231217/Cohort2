import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { lazy } from 'react'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
const Dashboard =lazy(()=>import('./components/Dashboard'));
const Landing =lazy(()=>import('./components/Landing'));

function App() {

  return (
    <>
     <BrowserRouter>
     <Appbar/>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Landing/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    <div>
     <button onClick={()=>{
      navigate("/");
     }}>Landing Page</button>
     <button onClick={()=>{
      navigate("/dashboard");
     }}>Dashboard</button>
    </div>
  </div>
}
export default  App
