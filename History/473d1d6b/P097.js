const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/subscribers")



// app.get("/", (req, res) )

app.listen(3000, () =>{
    console.log("server has started")
})