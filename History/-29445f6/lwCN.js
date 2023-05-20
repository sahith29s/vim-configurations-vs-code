const express = require("express")
const port = process.env.PORT || 3000
const app = express()
const http = require("http").createServer(app)
const path = require("path");
const io = require("socket.io")(http)

// paths 
const indexPath = path.join(__dirname, "./index.html")

//middle ware
app.use("/public" , express.static("public"))

app.get("/", async (req, res) => {
    res.sendFile(indexPath)
});

http.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


io.on("connection" , (socket) =>{
    console.log("connection");
})