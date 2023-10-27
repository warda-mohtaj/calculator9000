import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Calculator from './components/Calculator'
function App() {

  return (
    <>
      <Title text="Calculator9000 "/>
      <div className='calculator'>
        < Calculator />
      </div>
    </>
  )
}

export default App