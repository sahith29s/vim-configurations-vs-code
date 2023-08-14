import { useeffect, usestate } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <>
    sahith
      <Routes>
        <Route path="/"  element={<Navbar />} />
        <Route path="/about/:id"  element={<About name="sahith"/>}/>
        <Route path="/services"  element={<Services/>} />
      </Routes>
    </>
  )
}

export default App