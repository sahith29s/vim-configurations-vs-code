import React, { useState } from 'react'

const page = () => {
  const [username, setUsername] = useState(second)
  return (
    <>

      <h1>Enter your name</h1>
      <form action="">
        <input type="text" value={username} className='border-zinc-800 border-2 p' />
      </form>
    </>
  )
}

export default page