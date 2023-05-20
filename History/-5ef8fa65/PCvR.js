import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// import all  components
import Username from "./components/Username"
import Password from "./components/Password"
import Register from "./components/Register"
import Profile from "./components/Profile"
import Recovery from "./components/Recovery"
import Reset from "./components/Reset"
import PageNotFound from "./components/PageNotFound"




// root routes
const router = createBrowserRouter([
    {
        path :  "/",
        element : <div>route user</div>
    }
])
const App = () => {
  return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  )
}

export default App