import { 
  useState,
  useEffect
 } from 'react'
import './App.css'

let controller = new AbortController();
function App() {
  useEffect(() => {
    fetch('http://localhost:5173/api/banners',{
      // 接收信号
      signal:controller.signal
      // signal: AbortSignal.timeout(1000)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [])
  const stop = () => {
    controller.abort();
  }
  return (
    <>
     <button onClick={stop}>暂停</button>
    </>
  )
}

export default App
