import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from 'react'

function blog() {
  // const [blogs, setBlogs] = useState([])
  let blogs = []
  useEffect(() => {
    fetch("http://localhost:3001/api/blogs").then(a => {
      return a.json()
    })
      .then((data) => {
      blogs.push(data)
      console.log(data)
      })
  }, [])

  return (
  <>
  <div>slkjf</div>
 {
  blogs.map((item)=>{
    <div>{item.title}, shskdfj</div>
    console.log(item.title)
  })
 } 
  
  </>
  )
}

export default blog

