const express = require("express");

require("./config/db")()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 5000;
const notes = require("./data/notes")
const app = express();
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("API is running...")
})

app.get("/api/notes", (req, res) => {
    res.json(notes)
})

app.use("/api/users" , require("./routes/userRoutes"))

// app.get("/api/notes/:id", (req, res) => {
//     res.json(notes[req.params.id - 1])
// })


app.listen(5000, () => {
    console.log(`app running on port`)
})