import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { store } from './reduxToolkit/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <Provider
    <BrowserRouter>
      <App />
    </BrowserRouter>
)