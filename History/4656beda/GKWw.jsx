import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()
  
  handClick = (text) => {
    // textField.select()
    // document.execCommand('copy')
    // textField.remove()
    console.log("sahith");
  }

  return (
    
    
    <>
    <div className="content">{text}</div>
    <button onClick={() => handClick(loda)} className="">button </button>
    </>
  )
}

export default App