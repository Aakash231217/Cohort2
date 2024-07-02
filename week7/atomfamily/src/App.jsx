import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import { todosAtomFamily } from './atom.js';
import { useEffect } from 'react';

function App() {

  return <RecoilRoot>
    <UpdaterComponent/>
   <Todo id={1}/>
   <Todo id={2}/>
   <Todo id={2}/>
   <Todo id={2}/>
   <Todo id={2}/>
   
  </RecoilRoot>
}

function UpdaterComponent(){
  const updateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(()=>{
    setTimeout(()=>{
      updateTodo({
        id:"2",
        title:"new todo",
        description:"new todos",
      })
    },5000)
  },[])
}


function Todo({id}){
  const currentTodo = useRecoilValue(todosAtomFamily(id));
 return(
  <>
  {currentTodo.title}
  {currentTodo.description}
  <br/>
  </>
 )
}

export default App
