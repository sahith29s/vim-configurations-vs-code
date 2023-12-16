import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import AboutUs from "./components/About"
import Chat from "./components/Chat"
import Pagenotfound from "./components/Pagenotfound"
import Photo from "./components/Photo"

const App = () => {
  return (
    <>
      <div className="bg-red-700 flex items-center text-center text-white font-xl h-9 justify-center">Website undertaker construction</div>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App