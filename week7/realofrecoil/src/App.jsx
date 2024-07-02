import { useState } from 'react'
import{RecoilRoot} from 'recoil';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRecoilState, useRecoilValue} from 'recoil';
import { notifications, totalNotificationSelector } from './atoms';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  return<RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  {/*useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/notifications")
     .then(res=>{
      setNetworkCount(res.data);
     })

  },[])*/}
 return <>
  <button>Home</button>
  <button>MyNetwork ({networkCount.network>=100?"99+":networkCount.network})</button>
 </>

}


export default App
