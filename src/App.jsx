import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion"  
import Home from './pages/home/home'
import { Nav } from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
    </>
  )
}

export default App
