import { useState } from 'react'
import useStore from "./store/store"

function App() {

  const {text, setText} = useStore()



  let textFor = "this is me in vim "
  const handClick= (textFor) =>{
    navigator.clipboard.writeText("fuck you ")
  };

  return (
    
    
    <>
    <div className="content">{text}</div>
    <button onClick={() => handClick(loda)} className="">button </button>
    </>
  )
}

export default App