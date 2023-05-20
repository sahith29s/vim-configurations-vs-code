const express = require("express")
const app = express()
const http = require("http").Server(app)
const path = require("path")


const io = require("socket.io")(http)

io.on("connection", (socket)=>{
    console.log(socket)
})


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "src/index.html"))
})

http.listen(3000)