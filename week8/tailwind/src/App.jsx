import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return (
    <>
      {/*<div className='grid grid-cols-10'>
        <div className='bg-red-500 p-4 text-white col-span-5'>Yoo</div>
        <div className='bg-yellow-500 p-4 text-white col-span-2'>Fine</div>
        <div className='bg-green-500 p-4 text-white'>Bye</div>
        <div className='bg-red-500 md:bg-blue-500'></div>
      </div> */}
      <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13}/>
      </div>
    </>
  )
}

export default App

