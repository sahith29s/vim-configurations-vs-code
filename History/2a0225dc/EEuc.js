const express  = require("express")
const PORT = process.env.PORT || 5000
const app = express()

app.get("/" ,(req, res)=>{
    res.send("This is me ")
})



app.listen(PORT, ()=>{
    console.log(`server running one this port : ${PORT}`)
})