import { useeffect, usestate } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  Component={<Navbar />} />
        <Route path="/about"  Component={<About/>}/>
        <Route path="/services"  Component={<Services/>} />
      </Routes>
    </>
  )
}

export default App