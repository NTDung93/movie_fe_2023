import { useState } from 'react'
import './App.css'
import Index from './component'
import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index api="http://localhost:8080/movies"></Index>
      <Home />
    </>
  )
}

export default App
