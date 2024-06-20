import { useState, useEffect, memo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'
function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2data,setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  
  useEffect(()=>{
    setExchange1Data({
      returns:100
    });
  },[])

  useEffect(()=>{
    setExchange2Data({
      returns:100
    });
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({
        income:100
      })
    },5000)
  },[]);
  const calculateCrypto = useCallback( function(){
    return exchange1Data.returns+ exchange2data.returns;
  },[exchange1Data, exchange2data]);
  return (
    <>
     <CryptoGainsCalculator calculateCrypto={calculateCrypto}/>
    </>
  )
}

const CryptoGainsCalculator = memo(function({calculateCrypto}){
  console.log("Cyrpto child re-rendered");
  return <div>
    Your crypto returns are {calculateCrypto};
  </div>
})

export default App
