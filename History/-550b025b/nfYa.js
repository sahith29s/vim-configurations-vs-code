const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const  chats  = require("./data/data")
console.log(chats);

app.get("/", (req, res) => {
    res.json(chats);
});

app.get("/:id" , (req, res) =>{
    const singleChat = chats.find ((c) => c._id === req.params.id)
    res.send(chats)
})


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})