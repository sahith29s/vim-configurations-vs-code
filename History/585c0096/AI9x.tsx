import { Route, Routes } from "react-router-dom"
import Signin from "./components/pages/Signin"
import Login from "./components/pages/Login"
// import { Counter } from "./components/counter"

function App() {

  return (
    <>
      <Routes>
        <Route path="signin" element={<Signin/>} />
        <Route path="login" element={<Login />} /> 
      </Routes>
    </>
  )
}

export default App