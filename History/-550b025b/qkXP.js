const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const  chats  = require("./data/data")
console.log(chats);

app.get("/", (req, res) => {
    res.json(chats);
});

app.get("/api/:id" = (req, res) =>{
    res.send("params")
})


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})