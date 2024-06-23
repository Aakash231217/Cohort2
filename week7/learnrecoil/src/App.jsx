import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'
import { jobsAtom, messageAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'
import {RecoilRoot,useRecoilValue,useRecoilState,useSetRecoilState} from 'recoil';

//RecoilRoot
function App() {
return  <RecoilRoot>
  <MainApp/>
 </RecoilRoot>
}

function MainApp(){
 const networkNotification = useRecoilValue(networkAtom);
 const jobsAtomCount = useRecoilValue(jobsAtom);
 const NotificationsAtom = useRecoilValue(notificationsAtom);
 const [messagingAtomCount,setMessagingAtom] = useRecoilState(messageAtom);
 const totalNotificationCount = useRecoilValue(totalNotificationSelector);
 
 //useMemo
 {/*const totalNotificationCount = useMemo(()=>{
 return  networkNotification+jobsAtomCount+NotificationsAtom+messagingAtomCount;
 },[networkNotification,jobsAtomCount,NotificationsAtom,messagingAtomCount])
 */}return (
    <>
      <button>Home</button>
      <button>My network ({networkNotification >= 100 ? "99+": networkNotification})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notifications({NotificationsAtom})</button>
      <ButtonUpdater/>
      <button onClick={(()=>{
        setMessagingAtom(messagingAtomCount+1)
      })}>Me()</button>
      <button>Profile({totalNotificationCount})</button>
    </>
  )
}

function ButtonUpdater(){
  const setMessagingAtomCount = useSetRecoilState(messageAtom);
  return <button onClick={()=>{
    setMessagingAtomCount(c=>c+1);
  }}>SetMe</button>

}

export default App
