import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <>
      {/* 开发的任务单位就是组件 */}
      {/* <div style={{fontSize:'12px',width:'8.3333rem',height:'8.3333rem',background:'green'}}></div>
      <div style={{fontSize:'14px',width:'3.5714rem',height:'3.5714rem',background:'green'}}></div>
       */}
      <Todos />
    </>
  )
}

export default App
