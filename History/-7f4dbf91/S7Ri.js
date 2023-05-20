const express = require("express");

port = process.env.PORT || 3000;
const app = express();
const MensRanking = require("./models/mens")
require("./db/conn")

app.use(express.json())
app.post("/mens", async (req, res) => {
    try {
        await MensRanking.create(req.body)
        res.send(req.body)
        console.log(req.body);

    } catch (error) {
        console.log(error);

    }
})

app.get("/mens", (req, res) => {


});



app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

