import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index api="http://localhost:8080/movies"></Index>
    </>
  )
}

export default App
