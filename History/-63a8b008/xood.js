const express = require("express")
require("./db/con")
const Student = require("./models/students")
const app = express()
const mongoose = require("mongoose")
const validator = require("validator")
const port = process.env.PORT || 3000



app.get("/", (req, res) =>{
    res.send("This is me ")
})

app.post("/students", (req, res) =>{
    res.send("hello from the server side")

})
const stud


app.listen(port, ()=>{
    console.log(`connection set up ${port}`)
})