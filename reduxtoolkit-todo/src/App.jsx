import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl'>TODO Application Using React Redux-Toolkit</h1>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
