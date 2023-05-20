const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())

mongoose.connect("mongodb://localhost/subscribers")

const db =  mongoose.connection
db.on("error" , (error)  =>{
    console.error(error)
})

db.once("open" , () =>{
    console.log("connected to Database")
})


const subscrbersRouter = require("./routes/subscribers.js")

app.use("/subscribers" , subscrbersRouter)




app.listen(3000, () =>{
    console.log("server has started")
})