import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Board size={5} />
  )
}

export default App
