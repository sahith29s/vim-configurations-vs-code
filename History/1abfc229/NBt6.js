const express = require("express")
const app = express()
const port =process.env.PORT || 3000
const path = require("path")
app.set("view engine", "hbs")

console.log(path.join(__dirname))

// app.use(express.static(path.join(__dirname, "../public")))
app.get("/" ,(req, res)=>{
    res.render("index")
})


app.get("/weather" , )
app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("*", (req, res)=>{
    res.send("BSDK sahi type kr nahi tho gand mar lunga fuck you bitch and stuff you bitch! ")
})

app.listen(port, ()=>{
    console.log("this is being running on")
})